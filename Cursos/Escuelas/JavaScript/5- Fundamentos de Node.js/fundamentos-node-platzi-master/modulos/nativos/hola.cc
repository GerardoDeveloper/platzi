// hello.cc
#include <node.h> // Libreria que se necesita para trabajar con node

namespace demo {

// Trae todas las funciones del engine V8 qe necesita.
using v8::FunctionCallbackInfo;
using v8::Isolate;
using v8::Local;
using v8::NewStringType;
using v8::Object;
using v8::String;
using v8::Value;

// Crea un método
void Method(const FunctionCallbackInfo<Value>& args) {
  Isolate* isolate = args.GetIsolate();
  args.GetReturnValue().Set(String::NewFromUtf8(
      isolate, "mundo", NewStringType::kNormal).ToLocalChecked());
}

void Initialize(Local<Object> exports) {
  NODE_SET_METHOD(exports, "hola", Method);
}

// Setea el modulo, lo inicializa
NODE_MODULE(NODE_GYP_MODULE_NAME, Initialize)

}  // namespace demo