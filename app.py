
from flask import Flask
app = Flask(__name__)

count = 0

# rota apenas para verificar se a API está online
@app.route("/")
def Home():
    global count
    count += 1
    return str(count)
    

if __name__ == '__main__':
    app.run()



