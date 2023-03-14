class Person:
    def __init__(self, fname, lname, passw, email, bal, acctype):
        self.fname = fname
        self.lname = lname
        self.passw = passw
        self.email = email
        self.bal = bal
        self. acctype = acctype

    def myfunction(self):
        print(self.fname + " " + self.lname + "'s email is " + self.email)
        print("Balance: $",self.bal)
        print("Account Type: " + self.acctype)
    
p1 = Person("Kalekidan" ,"Bekele","abcd","email@sample.com", 100, "Saving")

p1.myfunction()