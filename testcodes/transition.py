import authenicate
row = authenicate.row
cursor = authenicate.cursor
j = authenicate.j

if row[0] != "":
    print("Account Accessed")
    bal_stmt = ("select balance from bankinfo where id =" + row[0])
    cursor.execute(bal_stmt)
    bal = cursor.fetchone()[0]
    print(bal)
    with open("balance.txt", "w") as f:
        f.write(bal)
    with open("user_rowarray.js", "w") as f:
        f.write(j)
else:
    print("Account Denied")

