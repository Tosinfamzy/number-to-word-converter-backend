## Install

```
npm install
```
## Usage
 Rename .env.example to .env
### Endpoints
    POST: localhost:PORT/

    body
    {
        "text": 23
    }


## TODO
- Better error handling
- Logger
## Task

```
Implement a number to word list converter as a Node backend and React/Redux frontend.

The backend should provide a rest endpoint that converts a given numeric string
into a list of corresponding words in the style of T9 [https://en.wikipedia.org/wiki/T9_(predictive_text)]
or Phonewords [https://en.wikipedia.org/wiki/Phoneword]. For example, given
the input 23 the output should be: ad, ae, af, bd, be, bf, cd, ce, cf

The frontend should allow the user to enter a number, query the backend for
the corresponding expansions, and display them.

The solution should be shared with us in a git repository with real history included.
It's OK not to deliver 100%, but the more working parts the better. For example if you
struggle with the backend, focus on frontend and just mock the API calls.

Ways to go beyond the minimal solution could include for example:
- phone keyboard -like UI
- great project setup
- mobile app in React Native
- filtering to include only real words based on a suitable word list
```