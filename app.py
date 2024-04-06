'''
    This is the starting file for a trail system 
'''

from flask import Flask
from flask import Flask, render_template

app = Flask(__name__)

# create the app route for the main page 
@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)

# create the app route for the about page 
@app.route('/about')
def about(): 
    return 'This is the about page'

