#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>


const char* ssid = "VIVO-2220";
const char*password = "C9D3CB2220";
int relayInput = 2; // the input to the relay pin
int relayInput1 = 0; // the input to the relay pin
int stateRelay = 0;
int stateRelay1 = 0;
 
void setup () {
 
  Serial.begin(115200);
  WiFi.begin(ssid, password);
  pinMode(relayInput, OUTPUT); // initialize pin as OUTPUT
  pinMode(relayInput1, OUTPUT); // initialize pin as OUTPUT
  while (WiFi.status() != WL_CONNECTED) {
   
  delay(1000);
  Serial.print("Connecting..");
   
  }
  
}

void loop() {
 
  if (WiFi.status() == WL_CONNECTED) { //Check WiFi connection status
   
  HTTPClient http;  //Declare an object of class HTTPClient
   
  http.begin("http://192.168.15.6:3000/login");  //Specify request destination
  int httpCode = http.GET();                                                                  //Send the request
   
  if (httpCode > 0) { //Check the returning code
   
  String payload = http.getString();   //Get the request response payload
    Serial.println(payload);                     //Print the response payload
  } 
   
  http.end();   //Close connection
  
  }
  changeRele(1);
  changeRele(2);
  delay(10000);    //Send a request every 30 seconds
 
}

void changeRele(int rele){
  if(rele == 1){
    if(stateRelay == 1){
      stateRelay = 0;
      digitalWrite(relayInput, LOW); // turn relay off
    }else{
      stateRelay = 1;
      digitalWrite(relayInput, HIGH); // turn relay on
    }
  }else{
    if(stateRelay1 == 1){
      stateRelay1 = 0;
      digitalWrite(relayInput1, LOW); // turn relay off
    }else{
      stateRelay1 = 1;
      digitalWrite(relayInput1, HIGH); // turn relay on
    }
  }
}
