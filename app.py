from flask import Flask, render_template, request, redirect

app = Flask(__name__)

# Route for the main page
@app.route('/')
def home():
    with open('data.txt', 'r') as file:
        posts = file.readlines()
    return render_template('home.html', posts=posts)

# Route for handling form submission and adding posts
@app.route('/add_post', methods=['POST'])
def add_post(): 
    if request.method == 'POST': 
        trail_name = request.form['trail_name']
        with open('data.txt', 'a') as file: 
            file.write(trail_name + '\n')
        return redirect('/')  # Redirect to the home page after adding the post
    
# Route for rendering the form to add a post
@app.route('/addpost')
def addpost():
    return render_template('addpost.html')

# Route for the about page
@app.route('/about')
def about(): 
    return render_template('about.html')

@app.route('/viewpost')
def view_post():
    post = request.args.get('post')
    return render_template('viewpost.html', post=post)

if __name__ == '__main__':
    app.run(debug=True)
