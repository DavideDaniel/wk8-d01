require 'sinatra'
require 'json'

get '/' do
	content_type :json
	

	data = {msg: "Hello World"}

	data.to_json




end



get "/top_theaters" do
top_theaters = %w[ Zigfield Lincoln\ Square Anjelika]

content_type :json

data = { msg: top_theaters}

data.to_json

end

get "/top_dvd2" do
top_dvd = [{"Jurrasic Park" => 9}, {"Superman" => 2}, {"Inception" => 8}]
top_dvd2 = %w[{Jurrasic 9} {Superman 2} {Inception 8}]

content_type :json

data = { results: top_dvd2}

data.to_json

end




