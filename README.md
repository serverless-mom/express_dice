startup arg, need to update the port every time :/

export OTEL_NODE_RESOURCE_DETECTORS="env,host,os"

export OTEL_TRACES_EXPORTER="otlp"
export OTEL_EXPORTER_OTLP_ENDPOINT="http://localhost:51711/"
export OTEL_SERVICE_NAME="nica-manual-app"
export NODE_OPTIONS="--require ./instrumentation.js"
node app.js