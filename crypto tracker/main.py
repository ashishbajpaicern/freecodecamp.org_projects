import requests
import json
response_API = requests.get(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
# print(response_API.status_code)
data = response_API.text
parse_json = json.loads(data)
active_case = parse_json[1]
print("ID", active_case)
