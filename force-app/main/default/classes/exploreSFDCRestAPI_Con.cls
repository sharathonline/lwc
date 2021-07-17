public class exploreSFDCRestAPI_Con {
    public void execute(){
        //Add Remote Site Setting
        //step 1: Instatiate HTTP Class
        HTTP http = new HTTP();
        //Step 2: Form a HttpRequest
        HTTPREQUEST req = new HTTPREQUEST();
        req.setEndPoint('https://personal299-dev-ed.my.salesforce.com/services/data/v50.0/sobjects/Account');
        req.setMethod('POST');
        req.setHeader('Authorization', 'OAuth '+UserInfo.getSessionId());
        req.setHeader('content-type', 'application/json');
        req.setBody('{"name" : "Career Choices"}');
        //Step 3: Handle the Response HttpResponse
        HTTPRESPONSE res = http.send(req);
        
    }	
}