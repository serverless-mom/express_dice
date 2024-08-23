bad/disused API KEY FOR CHECKLY:
ot_25134b4ea5124ab8949174bac5fd56ab

new OTel api key for Checkly:

ot_77e061042b5b4ae9b1a205955c49153c

NGrok auth token: 
ngrok config add-authtoken 2iko6nfytE7qRls4qgYye1QK2TN_2TDxooWxgbWrpYKgK4jQE

Web store: http://localhost:8080/
Grafana: http://localhost:8080/grafana/
Load Generator UI: http://localhost:8080/loadgen/
Jaeger UI: http://localhost:8080/jaeger/ui/
Tracetest UI: http://localhost:11633/, only when using make start-odd


Hey bud, you were running the opentelemetry demo:

https://opentelemetry.io/docs/demo/docker-deployment/

you need to restart the service in Docker, then you should be able to get to the grafana/jaeger backend services. 

cd testStuff
curl -i localhost:56535/v1/traces -X POST -H "Content-Type: application/json" -d @span.json

when it's running right, an OTel collector is available at http://localhost:????/ or SOMETHING you gotta check Docker Desktop each time for the new port.

Note that the url for the otel collector is HARD CODED into Instrumentation.js so you gotta edit it there as well as here. That's a todo




Good:

export OTEL_NODE_RESOURCE_DETECTORS="env,host,os"

export OTEL_TRACES_EXPORTER="otlp"
export OTEL_EXPORTER_OTLP_ENDPOINT="http://localhost:51711/"
export OTEL_SERVICE_NAME="nica-manual-app"
export NODE_OPTIONS="--require ./instrumentation.js"
node app.js