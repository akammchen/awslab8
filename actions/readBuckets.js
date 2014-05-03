var AWS = require("aws-sdk");



AWS.config.loadFromPath('./config.json');

var task =  function(request, callback){
	var S3 = new AWS.S3();
	S3.listBuckets({}, function(err, data){
		if(err){
			callback(err); console.log(err);
		}else {
			console.log(JSON.stringify(data));
			callback(null, {template:"index.ejs", params:{buckets:data.Buckets}});
		}
	});
	
	
}

exports.action = task