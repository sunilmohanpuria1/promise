var search=function(data,NAME,ag,gen)
{
    obj=JSON.parse(data);
    var i=0;
    var res=[];
    for(i=0;i<obj.length;i++)
        {
            if(obj[i].age==ag && (obj[i].name==NAME && obj[i].gender==gen))
            {
                res.push(obj[i]);
            }
            jsonContent = JSON.stringify(res); 
            var fs=require( 'fs');
            fs.writeFile("output.json",jsonContent,function(err, content) {
            if(err) console.log("error");
        });
        }
}

// With call back
var read_with_callback=function(filePath)
{
    var fs=require('fs');
    fs.readFile(filePath,'utf8',function (error,data)
    {
     if(error)
        {
        console.log("File not found");  
        }
    else
    search(data,"Kemp Blankenship",37,"male");
    })
}


// With Promise
var read_promise=function(filePath)
{
    return new Promise (function(resolve,reject){
        var fs=require('fs');
        fs.readFile(filePath,'utf8',function (error,data){
            if(error) reject(error);
            else resolve(data);
        })
    })
}
read_promise('./user.json')
.then(function(data){
    search(data,"Kemp Blankenship",37,"male");
})
.catch(function (error) {
    throw error;
});


/// read with await function
async function read_sync(filePath)
{
    let promise= new  Promise(function(resolve,reject){
        var fs=require('fs');
        fs.readFile(filePath,'utf8',function (error,data){
        if(error) reject(error);
        else  resolve( data);
        })
    })
    await promise;
    return promise;
}

read_sync('./user.json')
.then(function(data){
    search(data,"Kemp Blankenship",37,"male");
})
.catch(function (error) {
    throw error;
});





read_with_callback('./user.json');
