from flask import Flask, render_template, request, redirect, flash
from flask_mail import Mail, Message
import os


app = Flask(__name__)

# Secret key
app.secret_key = "your_secret_key_here"


# ==============================
# MAIL CONFIGURATION
# ==============================

app.config["MAIL_SERVER"] = "smtp.gmail.com"
app.config["MAIL_PORT"] = 587
app.config["MAIL_USE_TLS"] = True
app.config["MAIL_USE_SSL"] = False

# Your Gmail
app.config["MAIL_USERNAME"] = "jineeshp2002@gmail.com"

# Gmail App Password
app.config["MAIL_PASSWORD"] = "YOUR_GMAIL_APP_PASSWORD"

app.config["MAIL_DEFAULT_SENDER"] = "jineeshp2002@gmail.com"


mail = Mail(app)


# ==============================
# HOME PAGE
# ==============================

@app.route("/")
def home():

    return render_template("index.html")


# ==============================
# PROJECTS PAGE
# ==============================

@app.route("/projects")
def projects():

    return render_template("project.html")


# ==============================
# ABOUT PAGE
# ==============================

@app.route("/about")
def about_details():

    return render_template("about.html")


# ==============================
# CONTACT FORM
# ==============================

@app.route("/send-message", methods=["POST"])
def send_message():

    name = request.form.get("name")
    email = request.form.get("email")
    subject = request.form.get("subject")
    message = request.form.get("message")

    try:

        msg = Message(

            subject=f"Portfolio Contact: {subject}",

            sender="jineeshp2002@gmail.com",

            recipients=["jineeshp2002@gmail.com"],

            body=f"""

New message from your Portfolio Website

Name: {name}

Email: {email}

Subject: {subject}


Message:

{message}

"""
        )

        # Reply directly to visitor email
        msg.reply_to = email

        mail.send(msg)

        flash(
            "Message sent successfully! Thank you for contacting me.",
            "success"
        )

    except Exception as e:

        print(e)

        flash(
            "Message could not be sent. Please try again.",
            "error"
        )

    return redirect("/#contact")


# ==============================
# RUN APPLICATION
# ==============================

if __name__ == "__main__":

    app.run(
        debug=True
    )