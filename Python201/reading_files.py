# with open('readme.txt', 'r') as file:
#     content = file.read()
with open('readme.txt', 'r') as emails:
    emails = emails.readlines()

for email in emails:
    if("line" in email):
        print(email.rstrip())