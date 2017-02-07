/************************************ */
/**/ topic('proxy');
/************************************ */

const target = {
    foo: "Welcome, foo"
};
const proxy = new Proxy(target, {
    get (receiver, name) {
        return name in receiver ? receiver[name] : `Hello, ${name}`
    }
});

show('proxy.foo', proxy.foo);
show('proxy.world', proxy.foo);