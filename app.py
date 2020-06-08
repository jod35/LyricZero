from flask import Flask,render_template,request

import requests
import os



API_KEY=os.environ.get('API_KEY')

url='https://genius.p.rapidapi.com/search'

headers={
	   'x-rapidapi-host': "genius.p.rapidapi.com",
	   'x-rapidapi-key': API_KEY
}



app=Flask(__name__)

@app.route('/',methods=['GET','POST'])
def index():


    song_data=""

    if request.method == 'POST':

    	artist=request.form['artist']
    	print(artist)

    	queryString={"q":artist}

    	response=requests.get(url,headers=headers,params=queryString)

    	print(response.json())

    	res_data=response.json()

    	song_data=res_data['response']

    	


    	# return song_data


    

    context={
    	'song_data':song_data,
    }
    	

    return render_template('index.html',**context)


@app.route('/records')
def return_records():
	return render_template('results.html')


if __name__ == '__main__':
	app.run(debug=True)