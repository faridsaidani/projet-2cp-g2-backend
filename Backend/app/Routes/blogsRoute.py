from ..create_app import db
from flask import Blueprint,request,jsonify,session
from ..models  import Blog

# done with all test for blog
blogsRoute = Blueprint('blogsRoute', __name__,url_prefix='/blogs')

#  add update delete  gey get all
# blog model : content name 
def create_blog_post(name, content,date):
    blog_post = Blog(name=name, content=content,date=date)
    db.session.add(blog_post)
    db.session.commit()
    return blog_post
def get_blog_post(blog_id):
    return Blog.query.get(blog_id)
def get_all_blog_posts():
    return Blog.query.all()
def update_blog_post(blog_id, name, content):
    blog_post = Blog.query.get(blog_id)
    if blog_post:
        blog_post.name = name
        blog_post.content = content
        db.session.commit()
        return True
    return False
def delete_blog_post(blog_id):
    blog_post = Blog.query.get(blog_id)
    if blog_post:
        db.session.delete(blog_post)
        db.session.commit()
        return True
    return False


#create
@blogsRoute.route('/add', methods=['POST'])
def create_blog():
    data = request.form
    name = data['name']
    content = data['content']
    date = data['date']

    if name and content:
        blog_post = create_blog_post(name, content,date)
        return jsonify({'message': 'created'})
    else:
        return jsonify({'error': 'Missing name or content in request body'})
    
#get one blog
@blogsRoute.route('/blog/<int:blog_id>', methods=['GET'])
def get_blog(blog_id):
    blog_post = get_blog_post(blog_id)
    if blog_post:
        return jsonify({'id': blog_post.id, 'name': blog_post.name, 'content': blog_post.content})
    else:
        return jsonify({'error': 'Blog post not found'}), 404

# Get all blogs
# done
@blogsRoute.route('/blog', methods=['GET'])
def get_all_blogs():
    blog_posts = get_all_blog_posts()
    blog_list = []
    for blog_post in blog_posts:
        blog_list.append({'id': blog_post.id, 'name': blog_post.name, 'content': blog_post.content})
    return jsonify(blog_list)

# Update bloggg
# done 
@blogsRoute.route('/update/<int:blog_id>', methods=['PUT'])
def update_blog(blog_id):
    data = request.form
    name = data.get('name')
    content = data.get('content')
    if name and content:
        if update_blog_post(blog_id, name, content):
            return jsonify({'message': 'Blog post updated successfully'})
        else:
            return jsonify({'error': 'Blog post not found'})
    else:
        return jsonify({'error': 'Missing name or content in request body'})

# Delete a Blog Post
# 
@blogsRoute.route('/delete/<int:blog_id>', methods=['DELETE'])
def delete_blog(blog_id):
    if delete_blog_post(blog_id):
        return jsonify({'message': 'Blog post deleted successfully'})
    else:
        return jsonify({'error': 'Blog post not found'})