
from flask import Flask, render_template
 
app = Flask(__name__, template_folder='templates', static_folder='static')
 

@app.route('/')
def index():
    return render_template('index.html')
 
 

@app.route("/personal",endpoint='func1')
def index():
    return render_template('personal.html')


@app.route("/checklist",endpoint='func2')
def index():
    return render_template('checklist.html')


@app.route("/checklist1",endpoint='func3')
def index():
    return render_template('checklist1.html')

@app.route("/tip",endpoint='func4')
def index():
    return render_template('tip.html')




if __name__=='__main__':
    app.run(debug = True)