names = [("name", "leonidas"), ("occupation", "coder")]
d = {}
for key, value in names :
    d[key] = value

print(d)

d = {key: value for key, value in names}
print(d)