exports.EventEmitter = process.EvenEmitter;

exports.Promise = remove('Promise has been removed. See http://groups.google.com/group/nodejs/msg/0c483b891c56fea2 for more information.');
process.Promise = exports.Promise;
