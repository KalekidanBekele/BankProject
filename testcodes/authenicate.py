import json
import collections
import connection

cursor = connection.sqlcom
db = connection.mydb
row =[""]
user = ""
passw = ""

with open("username.txt","r") as f:
    user = f.read()
with open("password.txt","r") as f:
    passw = f.read()

authuser = (user,)
authpass = (passw,)

cursor.execute("select * from data, bankinfo where username = (%s) and password = (%s) and data.id = bankinfo.id",(authuser, authpass))
rows = cursor.fetchall()

rowarray_list = []
for row in rows:
    t = (row[0], row[1], row[2], row[3], row[4], row[5])
    rowarray_list.append(t)
j = json.dumps(rowarray_list)
