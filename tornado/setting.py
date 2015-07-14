import os

settings = dict(
    template_path = os.path.join(os.path.dirname(__file__),"template"),
    static_path = os.path.join(os.path.dirname(__file__),"static"),
    # xsrf_cookies = True,
    cookie_secret = "test",
    secure_cookie = "testtest",
    login_url = "/auth.html",
    doc_path = os.path.join(os.path.dirname(__file__),"../wiki/"),
    user_db = os.path.join(os.path.dirname(__file__),"../wiki/user.db"),
    debug = True,
)
