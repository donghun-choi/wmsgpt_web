from flask import Flask, render_template,abort,redirect

app = Flask(__name__)

@app.route("/")
def main():
    # abort(503)
    return render_template("index.html")

@app.route('/github')
def github():
    return redirect('https://github.com/sexy-code-maker/WMSGPT')

@app.route("/admin")
def nicetry():
    return "<h1>NICE TRY HAHA. 나약하구만!</h1>"

if __name__ == "__main__":
    # app.run(debug = 1)
    app.run(host = '0.0.0.0',port = 3000,debug = 1)
