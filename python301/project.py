class Bank:
    def __init__(self, initial_value = 0):
        self.balance = initial_value

    def log_transactions(self, account, action):
        with open("transactions.txt", "a") as historic:
            historic.write(f"{action} value: {account} \t\t actual balance:{self.balance}\n")
        
    def deposit(self, account):
        try:
            account = float(account)
        except ValueError:
            account = 0
            
        self.balance = self.balance +account
        self.log_transactions(account, "deposit")
    
    def withdrawel(self, account):
        try: 
            account = float(account)
        except ValueError:
            account = 0

        self.balance = self.balance - account
        self.log_transactions(account, "withdrawel")

person = Bank(100)
while True:
    choice = input("what action do you want? ")
    if choice in ["withdrawel", "deposit"]:
        account = input(f"digit the value to {choice}: ")
        if(choice == "withdrawel"):
            person.withdrawel(account)
            print(f'the withdrawel was -{account} and the new balance is {person.balance}')
        else:
            person.deposit(account)
            print(f'the deposit was +{account} and the new balance is {person.balance}')

    else: 
        print("action invalid")
        break