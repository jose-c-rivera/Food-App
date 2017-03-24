*********************************************
*					    *
*	 __  __	    __	  __	    __	    *
*	|   |__	 o  __|	  __|   |   __|	    *
*	|__  __| o |__   |__    |  |__	    *
*					    *
*					    *
*********************************************

*UPDATES*
1. Updated UML diagram can be found at https://fplan026.github.io/SoftwareDesign.html
2. Updated project plan page can be found at https://fplan026.github.io/ProjectPlan.html
3. Completed and closed user stories can be found at https://github.com/jose-c-rivera/jose-c-rivera.github.io/issues

TEAM MEMBERS:
------------------------------------------------------------------------------------------

	Name:				Development Branch:

* Ryan Kennedy................................devRyan
* Fran Plancke................................devFran
* Amy Wang....................................devAmy
* Mike Davis..................................devMike
* Yixin Li....................................devElaine
* Scott Lavelle...............................devScott
* Jose Carlos Rivera..........................devJose

Executing The Application
------------------------------------------------------------------------------------------
*Recommended to build and run in Linux*

1. Open a terminal

2. Make a new directory 'foodapp' , "mkdir foodapp"

3. change directory into the foodapp folder, "cd foodapp"

4. Initialize git in the foodapp directory, "git init"

5. Clone the project from github:
	"git clone https://github.com/jose-c-rivera/jose-c-rivera.github.io.git"

2. Change directories into jose-c-rivera.github.io and then foodApp, 
	"cd jose-c-rivera.github.io,
	 cd foodapp"

3. Run "grails run-app"


ORGANIZATION
------------------------------------------------------------------------------------------

React Javascript: Files can be found at 'src/main/js'

CSS Styling: FIles can be found at 'src/main/webapp/css'

Visual Assets: Files can be found at 'src/main/webapp/img'

Controllers: Files can be found at 'grails-app/controllers'


DEPENDENCIES
------------------------------------------------------------------------------------------
foodApp@0.0.1 /home/jose/FoodApp/jose-c-rivera.github.io/foodApp
├─┬ babel-core@6.23.1
│ ├─┬ babel-code-frame@6.22.0
│ │ ├─┬ chalk@1.1.3
│ │ │ ├── ansi-styles@2.2.1
│ │ │ ├── escape-string-regexp@1.0.5
│ │ │ ├─┬ has-ansi@2.0.0
│ │ │ │ └── ansi-regex@2.1.1
│ │ │ ├── strip-ansi@3.0.1
│ │ │ └── supports-color@2.0.0
│ │ ├── esutils@2.0.2
│ │ └── js-tokens@3.0.1
│ ├─┬ babel-generator@6.23.0
│ │ ├─┬ detect-indent@4.0.0
│ │ │ └─┬ repeating@2.0.1
│ │ │   └── is-finite@1.0.2
│ │ ├── jsesc@1.3.0
│ │ └── trim-right@1.0.1
│ ├── babel-helpers@6.23.0
│ ├── babel-messages@6.23.0
│ ├─┬ babel-register@6.23.0
│ │ ├── core-js@2.4.1
│ │ ├─┬ home-or-tmp@2.0.0
│ │ │ ├── os-homedir@1.0.2
│ │ │ └── os-tmpdir@1.0.2
│ │ └── source-map-support@0.4.11
│ ├─┬ babel-runtime@6.23.0
│ │ ├── core-js@2.4.1
│ │ └── regenerator-runtime@0.10.3
│ ├── babel-template@6.23.0
│ ├─┬ babel-traverse@6.23.1
│ │ └── globals@9.16.0
│ ├─┬ babel-types@6.23.0
│ │ └── to-fast-properties@1.0.2
│ ├── babylon@6.15.0
│ ├── convert-source-map@1.4.0
│ ├─┬ debug@2.6.1
│ │ └── ms@0.7.2
│ ├── json5@0.5.1
│ ├── lodash@4.17.4
│ ├─┬ minimatch@3.0.3
│ │ └─┬ brace-expansion@1.1.6
│ │   ├── balanced-match@0.4.2
│ │   └── concat-map@0.0.1
│ ├── path-is-absolute@1.0.1
│ ├── private@0.1.7
│ ├── slash@1.0.0
│ └── source-map@0.5.6
├─┬ babel-loader@6.3.2
│ ├─┬ find-cache-dir@0.1.1
│ │ ├── commondir@1.0.1
│ │ └─┬ pkg-dir@1.0.0
│ │   └─┬ find-up@1.1.2
│ │     ├── path-exists@2.1.0
│ │     └─┬ pinkie-promise@2.0.1
│ │       └── pinkie@2.0.4
│ ├─┬ loader-utils@0.2.17
│ │ ├── big.js@3.1.3
│ │ └── emojis-list@2.1.0
│ ├─┬ mkdirp@0.5.1
│ │ └── minimist@0.0.8
│ └── object-assign@4.1.1
├─┬ babel-preset-es2015@6.22.0
│ ├── babel-plugin-check-es2015-constants@6.22.0
│ ├── babel-plugin-transform-es2015-arrow-functions@6.22.0
│ ├── babel-plugin-transform-es2015-block-scoped-functions@6.22.0
│ ├── babel-plugin-transform-es2015-block-scoping@6.23.0
│ ├─┬ babel-plugin-transform-es2015-classes@6.23.0
│ │ ├── babel-helper-define-map@6.23.0
│ │ ├── babel-helper-function-name@6.23.0
│ │ ├── babel-helper-optimise-call-expression@6.23.0
│ │ └── babel-helper-replace-supers@6.23.0
│ ├── babel-plugin-transform-es2015-computed-properties@6.22.0
│ ├── babel-plugin-transform-es2015-destructuring@6.23.0
│ ├── babel-plugin-transform-es2015-duplicate-keys@6.22.0
│ ├── babel-plugin-transform-es2015-for-of@6.23.0
│ ├── babel-plugin-transform-es2015-function-name@6.22.0
│ ├── babel-plugin-transform-es2015-literals@6.22.0
│ ├── babel-plugin-transform-es2015-modules-amd@6.22.0
│ ├─┬ babel-plugin-transform-es2015-modules-commonjs@6.23.0
│ │ └── babel-plugin-transform-strict-mode@6.22.0
│ ├─┬ babel-plugin-transform-es2015-modules-systemjs@6.23.0
│ │ └── babel-helper-hoist-variables@6.22.0
│ ├── babel-plugin-transform-es2015-modules-umd@6.23.0
│ ├── babel-plugin-transform-es2015-object-super@6.22.0
│ ├─┬ babel-plugin-transform-es2015-parameters@6.23.0
│ │ ├── babel-helper-call-delegate@6.22.0
│ │ └── babel-helper-get-function-arity@6.22.0
│ ├── babel-plugin-transform-es2015-shorthand-properties@6.22.0
│ ├── babel-plugin-transform-es2015-spread@6.22.0
│ ├─┬ babel-plugin-transform-es2015-sticky-regex@6.22.0
│ │ └── babel-helper-regex@6.22.0
│ ├── babel-plugin-transform-es2015-template-literals@6.22.0
│ ├── babel-plugin-transform-es2015-typeof-symbol@6.23.0
│ ├─┬ babel-plugin-transform-es2015-unicode-regex@6.22.0
│ │ └─┬ regexpu-core@2.0.0
│ │   ├── regenerate@1.3.2
│ │   ├── regjsgen@0.2.0
│ │   └─┬ regjsparser@0.1.5
│ │     └── jsesc@0.5.0
│ └─┬ babel-plugin-transform-regenerator@6.22.0
│   └── regenerator-transform@0.9.8
├─┬ babel-preset-react@6.23.0
│ ├── babel-plugin-syntax-jsx@6.18.0
│ ├── babel-plugin-transform-react-display-name@6.23.0
│ ├─┬ babel-plugin-transform-react-jsx@6.23.0
│ │ └── babel-helper-builder-react-jsx@6.23.0
│ ├── babel-plugin-transform-react-jsx-self@6.22.0
│ ├── babel-plugin-transform-react-jsx-source@6.22.0
│ └─┬ babel-preset-flow@6.23.0
│   └─┬ babel-plugin-transform-flow-strip-types@6.22.0
│     └── babel-plugin-syntax-flow@6.18.0
├─┬ css-loader@0.26.2
│ ├─┬ css-selector-tokenizer@0.7.0
│ │ ├── cssesc@0.1.0
│ │ ├── fastparse@1.1.1
│ │ └── regexpu-core@1.0.0
│ ├─┬ cssnano@3.10.0
│ │ ├─┬ autoprefixer@6.7.6
│ │ │ ├─┬ browserslist@1.7.6
│ │ │ │ └── electron-to-chromium@1.2.5
│ │ │ ├── caniuse-db@1.0.30000631
│ │ │ ├── normalize-range@0.1.2
│ │ │ └── num2fraction@1.2.2
│ │ ├── decamelize@1.2.0
│ │ ├── defined@1.0.0
│ │ ├─┬ has@1.0.1
│ │ │ └── function-bind@1.1.0
│ │ ├─┬ postcss-calc@5.3.1
│ │ │ ├── postcss-message-helpers@2.0.0
│ │ │ └─┬ reduce-css-calc@1.3.0
│ │ │   ├── math-expression-evaluator@1.2.16
│ │ │   └── reduce-function-call@1.0.2
│ │ ├─┬ postcss-colormin@2.2.2
│ │ │ └─┬ colormin@1.1.2
│ │ │   ├─┬ color@0.11.4
│ │ │   │ ├── clone@1.0.2
│ │ │   │ ├─┬ color-convert@1.9.0
│ │ │   │ │ └── color-name@1.1.1
│ │ │   │ └── color-string@0.3.0
│ │ │   └── css-color-names@0.0.4
│ │ ├── postcss-convert-values@2.6.1
│ │ ├── postcss-discard-comments@2.0.4
│ │ ├── postcss-discard-duplicates@2.1.0
│ │ ├── postcss-discard-empty@2.1.0
│ │ ├── postcss-discard-overridden@0.1.1
│ │ ├─┬ postcss-discard-unused@2.2.3
│ │ │ └── uniqs@2.0.0
│ │ ├─┬ postcss-filter-plugins@2.0.2
│ │ │ └─┬ uniqid@4.1.1
│ │ │   └── macaddress@0.2.8
│ │ ├── postcss-merge-idents@2.1.7
│ │ ├── postcss-merge-longhand@2.0.2
│ │ ├─┬ postcss-merge-rules@2.1.2
│ │ │ ├─┬ caniuse-api@1.5.3
│ │ │ │ ├── lodash.memoize@4.1.2
│ │ │ │ └── lodash.uniq@4.5.0
│ │ │ ├─┬ postcss-selector-parser@2.2.3
│ │ │ │ ├── flatten@1.0.2
│ │ │ │ ├── indexes-of@1.0.1
│ │ │ │ └── uniq@1.0.1
│ │ │ └── vendors@1.0.1
│ │ ├── postcss-minify-font-values@1.0.5
│ │ ├── postcss-minify-gradients@1.0.5
│ │ ├─┬ postcss-minify-params@1.2.2
│ │ │ └── alphanum-sort@1.0.2
│ │ ├── postcss-minify-selectors@2.1.1
│ │ ├── postcss-normalize-charset@1.1.1
│ │ ├─┬ postcss-normalize-url@3.0.8
│ │ │ ├── is-absolute-url@2.1.0
│ │ │ └─┬ normalize-url@1.9.0
│ │ │   ├── prepend-http@1.0.4
│ │ │   └─┬ sort-keys@1.1.2
│ │ │     └── is-plain-obj@1.1.0
│ │ ├── postcss-ordered-values@2.2.3
│ │ ├── postcss-reduce-idents@2.4.0
│ │ ├── postcss-reduce-initial@1.0.1
│ │ ├── postcss-reduce-transforms@1.0.4
│ │ ├─┬ postcss-svgo@2.1.6
│ │ │ ├─┬ is-svg@2.1.0
│ │ │ │ └── html-comment-regex@1.1.1
│ │ │ └─┬ svgo@0.7.2
│ │ │   ├─┬ coa@1.0.1
│ │ │   │ └── q@1.4.1
│ │ │   ├── colors@1.1.2
│ │ │   ├─┬ csso@2.3.1
│ │ │   │ └── clap@1.1.2
│ │ │   ├─┬ js-yaml@3.7.0
│ │ │   │ ├─┬ argparse@1.0.9
│ │ │   │ │ └── sprintf-js@1.0.3
│ │ │   │ └── esprima@2.7.3
│ │ │   ├── sax@1.2.2
│ │ │   └── whet.extend@0.9.9
│ │ ├── postcss-unique-selectors@2.0.2
│ │ ├── postcss-value-parser@3.3.0
│ │ └── postcss-zindex@2.2.0
│ ├── loader-utils@1.0.2
│ ├── lodash.camelcase@4.3.0
│ ├─┬ postcss@5.2.15
│ │ ├── js-base64@2.1.9
│ │ └── supports-color@3.2.3
│ ├── postcss-modules-extract-imports@1.0.1
│ ├─┬ postcss-modules-local-by-default@1.1.1
│ │ └─┬ css-selector-tokenizer@0.6.0
│ │   └── regexpu-core@1.0.0
│ ├─┬ postcss-modules-scope@1.0.2
│ │ └─┬ css-selector-tokenizer@0.6.0
│ │   └── regexpu-core@1.0.0
│ ├─┬ postcss-modules-values@1.2.2
│ │ └── icss-replace-symbols@1.0.2
│ └── source-list-map@0.1.8
├── jquery@3.1.1
├── npm@3.8.3 extraneous
├─┬ react@15.4.2
│ ├─┬ fbjs@0.8.9
│ │ ├── core-js@1.2.7
│ │ ├─┬ isomorphic-fetch@2.2.1
│ │ │ └─┬ node-fetch@1.6.3
│ │ │   ├─┬ encoding@0.1.12
│ │ │   │ └── iconv-lite@0.4.15
│ │ │   └── is-stream@1.1.0
│ │ ├─┬ promise@7.1.1
│ │ │ └── asap@2.0.5
│ │ ├── setimmediate@1.0.5
│ │ └── ua-parser-js@0.7.12
│ └── loose-envify@1.3.1
├── react-dom@15.4.2
├─┬ react-router@3.0.2
│ ├─┬ history@3.2.1
│ │ └─┬ query-string@4.3.2
│ │   └── strict-uri-encode@1.1.0
│ ├── hoist-non-react-statics@1.2.0
│ ├── invariant@2.2.2
│ └── warning@3.0.0
├─┬ react-select@1.0.0-rc.3
│ ├── classnames@2.2.5
│ └── react-input-autosize@1.1.0
├─┬ style-loader@0.13.2
│ └── loader-utils@1.0.2
├─┬ webpack@2.2.1
│ ├── acorn@4.0.11
│ ├── acorn-dynamic-import@2.0.1
│ ├─┬ ajv@4.11.3
│ │ ├── co@4.6.0
│ │ └─┬ json-stable-stringify@1.0.1
│ │   └── jsonify@0.0.0
│ ├── ajv-keywords@1.5.1
│ ├── async@2.1.5
│ ├─┬ enhanced-resolve@3.1.0
│ │ └── graceful-fs@4.1.11
│ ├── interpret@1.0.1
│ ├── json-loader@0.5.4
│ ├── loader-runner@2.3.0
│ ├─┬ memory-fs@0.4.1
│ │ ├─┬ errno@0.1.4
│ │ │ └── prr@0.0.0
│ │ └─┬ readable-stream@2.2.3
│ │   ├── buffer-shims@1.0.0
│ │   ├── core-util-is@1.0.2
│ │   ├── inherits@2.0.3
│ │   ├── isarray@1.0.0
│ │   ├── process-nextick-args@1.0.7
│ │   └── util-deprecate@1.0.2
│ ├─┬ node-libs-browser@2.0.0
│ │ ├── assert@1.4.1
│ │ ├─┬ browserify-zlib@0.1.4
│ │ │ └── pako@0.2.9
│ │ ├─┬ buffer@4.9.1
│ │ │ ├── base64-js@1.2.0
│ │ │ └── ieee754@1.1.8
│ │ ├─┬ console-browserify@1.1.0
│ │ │ └── date-now@0.1.4
│ │ ├── constants-browserify@1.0.0
│ │ ├─┬ crypto-browserify@3.11.0
│ │ │ ├─┬ browserify-cipher@1.0.0
│ │ │ │ ├─┬ browserify-aes@1.0.6
│ │ │ │ │ └── buffer-xor@1.0.3
│ │ │ │ ├─┬ browserify-des@1.0.0
│ │ │ │ │ └── des.js@1.0.0
│ │ │ │ └── evp_bytestokey@1.0.0
│ │ │ ├─┬ browserify-sign@4.0.0
│ │ │ │ ├── bn.js@4.11.6
│ │ │ │ ├── browserify-rsa@4.0.1
│ │ │ │ ├─┬ elliptic@6.4.0
│ │ │ │ │ ├── brorand@1.1.0
│ │ │ │ │ ├── hash.js@1.0.3
│ │ │ │ │ ├── hmac-drbg@1.0.0
│ │ │ │ │ ├── minimalistic-assert@1.0.0
│ │ │ │ │ └── minimalistic-crypto-utils@1.0.1
│ │ │ │ └─┬ parse-asn1@5.0.0
│ │ │ │   └── asn1.js@4.9.1
│ │ │ ├── create-ecdh@4.0.0
│ │ │ ├─┬ create-hash@1.1.2
│ │ │ │ ├── cipher-base@1.0.3
│ │ │ │ ├── ripemd160@1.0.1
│ │ │ │ └── sha.js@2.4.8
│ │ │ ├── create-hmac@1.1.4
│ │ │ ├─┬ diffie-hellman@5.0.2
│ │ │ │ └── miller-rabin@4.0.0
│ │ │ ├── pbkdf2@3.0.9
│ │ │ ├── public-encrypt@4.0.0
│ │ │ └── randombytes@2.0.3
│ │ ├── domain-browser@1.1.7
│ │ ├── events@1.1.1
│ │ ├── https-browserify@0.0.1
│ │ ├── os-browserify@0.2.1
│ │ ├── path-browserify@0.0.0
│ │ ├── process@0.11.9
│ │ ├── punycode@1.4.1
│ │ ├── querystring-es3@0.2.1
│ │ ├── stream-browserify@2.0.1
│ │ ├─┬ stream-http@2.6.3
│ │ │ ├── builtin-status-codes@3.0.0
│ │ │ ├── to-arraybuffer@1.0.1
│ │ │ └── xtend@4.0.1
│ │ ├── string_decoder@0.10.31
│ │ ├── timers-browserify@2.0.2
│ │ ├── tty-browserify@0.0.0
│ │ ├─┬ url@0.11.0
│ │ │ ├── punycode@1.3.2
│ │ │ └── querystring@0.2.0
│ │ ├─┬ util@0.10.3
│ │ │ └── inherits@2.0.1
│ │ └─┬ vm-browserify@0.0.4
│ │   └── indexof@0.0.1
│ ├─┬ supports-color@3.2.3
│ │ └── has-flag@1.0.0
│ ├── tapable@0.2.6
│ ├─┬ uglify-js@2.7.5
│ │ ├── async@0.2.10
│ │ ├── uglify-to-browserify@1.0.2
│ │ └─┬ yargs@3.10.0
│ │   ├── camelcase@1.2.1
│ │   ├─┬ cliui@2.1.0
│ │   │ ├─┬ center-align@0.1.3
│ │   │ │ ├─┬ align-text@0.1.4
│ │   │ │ │ ├── longest@1.0.1
│ │   │ │ │ └── repeat-string@1.6.1
│ │   │ │ └── lazy-cache@1.0.4
│ │   │ ├── right-align@0.1.3
│ │   │ └── wordwrap@0.0.2
│ │   └── window-size@0.1.0
│ ├─┬ watchpack@1.3.1
│ │ └─┬ chokidar@1.6.1
│ │   ├─┬ anymatch@1.3.0
│ │   │ ├── arrify@1.0.1
│ │   │ └─┬ micromatch@2.3.11
│ │   │   ├─┬ arr-diff@2.0.0
│ │   │   │ └── arr-flatten@1.0.1
│ │   │   ├── array-unique@0.2.1
│ │   │   ├─┬ braces@1.8.5
│ │   │   │ ├─┬ expand-range@1.8.2
│ │   │   │ │ └─┬ fill-range@2.2.3
│ │   │   │ │   ├── is-number@2.1.0
│ │   │   │ │   ├── isobject@2.1.0
│ │   │   │ │   └── randomatic@1.1.6
│ │   │   │ ├── preserve@0.2.0
│ │   │   │ └── repeat-element@1.1.2
│ │   │   ├─┬ expand-brackets@0.1.5
│ │   │   │ └── is-posix-bracket@0.1.1
│ │   │   ├── extglob@0.3.2
│ │   │   ├── filename-regex@2.0.0
│ │   │   ├─┬ kind-of@3.1.0
│ │   │   │ └── is-buffer@1.1.4
│ │   │   ├── normalize-path@2.0.1
│ │   │   ├─┬ object.omit@2.0.1
│ │   │   │ ├─┬ for-own@0.1.4
│ │   │   │ │ └── for-in@0.1.6
│ │   │   │ └── is-extendable@0.1.1
│ │   │   ├─┬ parse-glob@3.0.4
│ │   │   │ ├── glob-base@0.3.0
│ │   │   │ └── is-dotfile@1.0.2
│ │   │   └─┬ regex-cache@0.4.3
│ │   │     ├── is-equal-shallow@0.1.3
│ │   │     └── is-primitive@2.0.0
│ │   ├── async-each@1.0.1
│ │   ├── UNMET OPTIONAL DEPENDENCY fsevents@^1.0.0
│ │   ├── glob-parent@2.0.0
│ │   ├─┬ is-binary-path@1.0.1
│ │   │ └── binary-extensions@1.8.0
│ │   ├─┬ is-glob@2.0.1
│ │   │ └── is-extglob@1.0.0
│ │   └─┬ readdirp@2.1.0
│ │     └── set-immediate-shim@1.0.1
│ ├── webpack-sources@0.1.4
│ └─┬ yargs@6.6.0
│   ├── camelcase@3.0.0
│   ├─┬ cliui@3.2.0
│   │ └── wrap-ansi@2.1.0
│   ├── get-caller-file@1.0.2
│   ├─┬ os-locale@1.4.0
│   │ └─┬ lcid@1.0.0
│   │   └── invert-kv@1.0.0
│   ├─┬ read-pkg-up@1.0.1
│   │ └─┬ read-pkg@1.1.0
│   │   ├─┬ load-json-file@1.1.0
│   │   │ ├─┬ parse-json@2.2.0
│   │   │ │ └─┬ error-ex@1.3.0
│   │   │ │   └── is-arrayish@0.2.1
│   │   │ ├── pify@2.3.0
│   │   │ └─┬ strip-bom@2.0.0
│   │   │   └── is-utf8@0.2.1
│   │   ├─┬ normalize-package-data@2.3.5
│   │   │ ├── hosted-git-info@2.2.0
│   │   │ ├─┬ is-builtin-module@1.0.0
│   │   │ │ └── builtin-modules@1.1.1
│   │   │ ├── semver@5.3.0
│   │   │ └─┬ validate-npm-package-license@3.0.1
│   │   │   ├─┬ spdx-correct@1.0.2
│   │   │   │ └── spdx-license-ids@1.2.2
│   │   │   └── spdx-expression-parse@1.0.4
│   │   └── path-type@1.1.0
│   ├── require-directory@2.1.1
│   ├── require-main-filename@1.0.1
│   ├── set-blocking@2.0.0
│   ├─┬ string-width@1.0.2
│   │ ├── code-point-at@1.1.0
│   │ └─┬ is-fullwidth-code-point@1.0.0
│   │   └── number-is-nan@1.0.1
│   ├── which-module@1.0.0
│   ├── y18n@3.2.1
│   └─┬ yargs-parser@4.2.1
│     └── camelcase@3.0.0
└── whatwg-fetch@2.0.2

