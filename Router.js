export default class Router {
    constructor() {
        this.endpoints = {}
    }
    request(method = 'GET', path, handler) {
        if(!this.endpoints[path]) {
            this.endpoints[path] = {}
        }
        const endpoint = this.endpoints[path]
        if(endpoint[method]) {
            throw new Error(`[${method}] via url ${path} already exists`)
        }
        endpoint[method] = handler
    }

    get(path, handler) {
        this.request('GET', path, handler)
    }
    post(path, handler) {
        this.request('POST', path, handler)
    }
    delete(path, handler) {
        this.request('DELETE', path, handler)
    }
    put(path, handler) {
        this.request('PUT', path, handler)
    }
}
