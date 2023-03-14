from flask import Flask, redirect, url_for
app = Flask(__name__)
#a = False

@app.route("/")
def home():
    return "hello new page from python <h1> Goodbye </h1>"

@app.route("/<name>")
def user(name):
    return f"Hello {name}!"

@app.route("/admin")
def admin():
    return redirect(url_for("home"))

if __name__ == "__main__":
    app.run()