// Make an object reactive setting a custom setter and getter for each property
// Keep in mind: this function works with object literals only
function makeReactive(obj) {
  Object.keys(obj).forEach(key => {
    let internalValue = obj[key];

    // each property get a dipendency
    const dep = new Dep();

    Object.defineProperty(obj, key, {
      get() {
        // when a value is being accessed we start to track the changes
        // for the current task (target)
        dep.depend();
        return internalValue;
      },
      set(newVal) {
        // if the value is not changed there is no need to notify the subscribers
        if (internalValue !== newVal) {
          internalValue = newVal;

          // value has been changed!
          // notify all the subscribers
          dep.notify();
        }
      }
    });
  });

  return obj;
}

// Watcher function
// Init the target as the current task to be executed
function autorun(task) {
  Dep.target = task;
  Dep.target();
  Dep.target = null;
}

// Dependency unit
class Dep {
  // the current target to be executed
  static target = null;

  constructor() {
    // Set of unique subscribers (callbacks)
    this.subscribers = new Set();
  }

  // Add the current target to the subscribers list
  depend() {
    if (Dep.target && !this.subscribers.has(Dep.target)) {
      this.subscribers.add(Dep.target);
    }
  }

  // runs all the subscriber callbacks
  notify() {
    this.subscribers.forEach(sub => sub());
  }
}
