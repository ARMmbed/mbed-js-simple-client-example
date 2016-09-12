setInterval(function() {
    print(".");
}, 10000);

print("---START");
var network_stack = easy_connect(false);
var simple_client = SimpleClient();
simple_client.define_function("led/0/toggle",
    function() { print("You toggled me."); }
);
if (simple_client.setup(network_stack)) {
  print("Successfully setup network.");
};
simple_client.on_registered(function() { print("SimpleClient Registered."); });
print("---DONE");
