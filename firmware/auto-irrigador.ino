#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include <DHT.h>


#define DHTTYPE DHT11 // DHT 11
#define DHTPIN 4 // GPIo4 ou porta D2 do NodeMCU

DHT dht(DHTPIN, DHTTYPE); //Criação do objeto de leitura DHT

int ldr = 0; //Setando a utilizaçâo do LDR à porta ADC A0 do Nodemcu
int valorldr = 0;//variável para armazenar a leitura do ldr.
float t,h; //variáveis que armazenarão os valores lidos de temperatura e umidade;
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
  dht.begin(); //Inicia o sensor
  while (WiFi.status() != WL_CONNECTED) {
   
  delay(1000);
  Serial.print("Connecting..");
   
  }
  
}

void loop() {
 
  if (WiFi.status() == WL_CONNECTED) { //Check WiFi connection status

  float t = dht.readTemperature(); //Função de leitura da temperatura
  float h = dht.readHumidity();//Função de leitura da umidade
  valorldr = analogRead(ldr);
  Serial.println(valorldr);  
  Serial.print("Current humidity = ");
  Serial.print(h);
  Serial.print("%  ");
  Serial.print("temperature = ");
  Serial.print(t); 
  Serial.println("C  "); 
  HTTPClient http;  //Declare an object of class HTTPClient
  String url = "http://192.168.15.6:3000/getStatusHardware?token=123456789&umidade="+ String(h) +"&temperatura=" + String(t) + "&luminosidade=" + valorldr;
   
  http.begin(url);  //Specify request destination
  int httpCode = http.GET();                                                                  //Send the request
   
  if (httpCode > 0) { //Check the returning code
   
  String payload = http.getString();   //Get the request response payload
    Serial.println(payload);                     //Print the response payload
    if(payload.substring(13,14) == "0"){
      Serial.println("Mandei desligar 1"); 
      turnOffRelay(1);
    }
    
    if(payload.substring(27,28) == "0"){
      Serial.println("Mandei desligar 2");
      turnOffRelay(2);
    }

    if(payload.substring(13,14) == "1"){
      Serial.println("Mandei ligar 1");
      turnOnRelay(1);
    }
    
    if(payload.substring(27,28) == "1"){
      Serial.println("Mandei ligar 2");
      turnOnRelay(2);
    }
  } else{
    Serial.println("Deu algum erro aqui");
    turnOffRelay(1);
    turnOffRelay(2);
  }
   
  http.end();   //Close connection
  
  }
  delay(30000);    //Send a request every 30 seconds
 
}

void turnOnRelay(int rele){
  if(rele == 1){
      digitalWrite(relayInput, HIGH); // turn relay on
  }else{
      digitalWrite(relayInput1, HIGH); // turn relay off
  }
}

void turnOffRelay(int rele){
  if(rele == 1){
      digitalWrite(relayInput, LOW); // turn relay on
  }else{
      digitalWrite(relayInput1, LOW); // turn relay off
  }
}