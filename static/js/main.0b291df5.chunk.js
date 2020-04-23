(this["webpackJsonpreact-dev-demo"]=this["webpackJsonpreact-dev-demo"]||[]).push([[0],{11:function(e,t,n){"use strict";function a(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}Object.defineProperty(t,"__esModule",{value:!0}),a(n(45)),a(n(78))},114:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(21),r=n.n(i),l=(n(71),n(6)),c=n(10),s=(n(72),n(11)),u=n(123),d=n(122),m=n(56),f=n(25),h=n(129),p=n(53),g=n(121);h.a.registerLanguage("jsx",p.a);var v=function(e){var t=e.className,n=e.codeString;return o.a.createElement("div",{className:t},o.a.createElement(h.a,{language:"javascript",style:g.a,showLineNumbers:!0},n))},E=n(127),y=n(124),b=n(57),C={envId:"bn1ab7m56qolupi5sa0g",sdkConfig:{fetchNow:!0,enableConsoleLogs:!0,enableErrorLayout:!0,nodeEnv:"development"},visitorData:{id:"test-vid",context:{isAuth:!0,numberTransaction:12,isVip:!1}},sandbox:{envId:["bn1ab7m56qolupi5sa0g","bn1ab7m56qolupi5sa0g_1","bn1ab7m56qolupi5sa0g_2"],nodeEnv:["development","production"],visitorId:["test-vid","test-vid_2","test-vid_3"]}},k=function(){var e="initialization",t=Object(l.a)({},C.visitorData.context),n=Object(a.useContext)(L),i=n.currentSettings,r=n.setSettings,s=o.a.useState(Object(l.a)({},i)),u=Object(c.a)(s,2),h=u[0],p=u[1],g=function(e){var t=JSON.parse(e.currentTarget.parentElement.innerText),n=Object(l.a)({},h);if(e.currentTarget.checked)p(Object(l.a)({},h,{visitorData:Object(l.a)({},h.visitorData,{context:Object(l.a)({},h.visitorData.context,{},t)})}));else{var a=Object.keys(t)[0];p(Object(l.a)({},h,{visitorData:Object(l.a)({},h.visitorData,{context:Object.entries(n.visitorData.context).reduce((function(e,t){var n=Object(c.a)(t,2),o=n[0],i=n[1];return o===a?e:Object(l.a)({},e,Object(f.a)({},o,i))}),{})})}))}};return o.a.createElement(d.a,null,o.a.createElement(m.a,null,o.a.createElement("div",{className:"fsAnchor",id:e}),o.a.createElement(E.a,{variant:"dark",className:"fs-alert demoHook"},o.a.createElement(E.a.Heading,null,e),o.a.createElement("p",null,"The ",o.a.createElement("b",null,e)," is proceed with"," ",o.a.createElement("b",null,"FlagshipProvider"),". In this demo app, it is plugged like so:"),o.a.createElement(v,{className:"mv3",codeString:"import React from 'react';\nimport { FlagshipProvider } from \"@flagship.io/react-sdk\";\n\nconst App: React.FC = () => (\n  <>\n      <FlagshipProvider\n      envId={".concat(i.envId,"}\n      config={\n        ").concat(JSON.stringify(i.sdkConfig,null,2),"\n      }\n      visitorData={\n        ").concat(JSON.stringify(i.visitorData,null,2),'\n    }\n      onInitStart={() => {\n        console.log("init start");\n      }}\n      onInitDone={() => {\n        console.log("init done");\n      }}\n      onUpdate={({ fsModifications }) => {\n        console.log(\n            \'React SDK updated with modifications:\' + JSON.stringify(fsModifications)\n        );\n      }}\n      loadingComponent={\n        <Container className="mt3">\n          <Row>\n            <Col xs={12}>Loading Flagship React SDK...</Col>\n          </Row>\n        </Container>\n      }\n    >\n      <Header />\n      <AppContainer />\n    </FlagshipProvider>\n  </>\n);          ')}),o.a.createElement("p",null,"To understand impact of each props, you can change some value dynamically here:"," "),o.a.createElement("h3",{style:{borderBottom:"1px solid grey",marginBottom:"16px",paddingBottom:"8px"}},"1 - Playing with ",o.a.createElement("i",null,"config")),o.a.createElement(y.a,null,o.a.createElement(y.a.Group,{controlId:"initForm.Control1.1",style:{display:"flex",alignItems:"center",marginLeft:"16px"}},o.a.createElement("div",null,"envId: "),o.a.createElement(y.a.Control,{as:"select",onChange:function(e){return p(Object(l.a)({},h,{envId:e.target.value}))}},C.sandbox.envId.map((function(e){return o.a.createElement("option",{key:e},e)})))),o.a.createElement(y.a.Group,{controlId:"initForm.Control1.11",style:{display:"flex",alignItems:"center",marginLeft:"16px"}},o.a.createElement("div",null,"nodeEnv: "),o.a.createElement(y.a.Control,{as:"select",onChange:function(e){return p(Object(l.a)({},h,{sdkConfig:Object(l.a)({},h.sdkConfig,{nodeEnv:e.target.value})}))}},C.sandbox.nodeEnv.map((function(e){return o.a.createElement("option",{key:e},e)})))),o.a.createElement(y.a.Group,{controlId:"initForm.Control1.2"},o.a.createElement(y.a.Check,{type:"checkbox",checked:h.sdkConfig.fetchNow,onChange:function(e){return p(Object(l.a)({},h,{sdkConfig:Object(l.a)({},h.sdkConfig,{fetchNow:e.currentTarget.checked})}))},label:"fetchNow=".concat(h.sdkConfig.fetchNow)})),o.a.createElement(y.a.Group,{controlId:"initForm.Control1.3"},o.a.createElement(y.a.Check,{type:"checkbox",checked:h.sdkConfig.enableConsoleLogs,onChange:function(e){return p(Object(l.a)({},h,{sdkConfig:Object(l.a)({},h.sdkConfig,{enableConsoleLogs:e.currentTarget.checked})}))},label:"enableConsoleLogs=".concat(h.sdkConfig.enableConsoleLogs)})),o.a.createElement(y.a.Group,{controlId:"initForm.Control1.4"},o.a.createElement(y.a.Check,{type:"checkbox",checked:h.sdkConfig.enableErrorLayout,onChange:function(e){return p(Object(l.a)({},h,{sdkConfig:Object(l.a)({},h.sdkConfig,{enableErrorLayout:e.currentTarget.checked})}))},label:"enableErrorLayout=".concat(h.sdkConfig.enableErrorLayout)}))),o.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end"}},o.a.createElement(b.a,{variant:"secondary",onClick:function(){return r(Object(l.a)({},h))}},"Apply change")),o.a.createElement("h3",null,"2 - Playing with ",o.a.createElement("i",null,"visitorData")),o.a.createElement(y.a,null,o.a.createElement(y.a.Group,{controlId:"initForm.ControlSelect2"},o.a.createElement(y.a.Label,null,"visitorId"),o.a.createElement(y.a.Control,{as:"select",onChange:function(e){return p(Object(l.a)({},h,{visitorData:Object(l.a)({},h.visitorData,{id:e.target.value})}))}},C.sandbox.visitorId.map((function(e){return o.a.createElement("option",{key:e},e)})))),o.a.createElement(y.a.Group,{controlId:"initForm.ControlSelect3"},o.a.createElement(y.a.Label,null,"visitor context"),Object.entries(t).map((function(e){var t=Object(c.a)(e,2),n=t[0],a=t[1];return o.a.createElement(y.a.Check,{key:n,type:"checkbox",id:"default-".concat(n),checked:h.visitorData.context.hasOwnProperty(n),onChange:g,label:JSON.stringify(Object(f.a)({},n,a))})})))),o.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end"}},o.a.createElement(b.a,{variant:"secondary",onClick:function(){return r(Object(l.a)({},h))}},"Apply change")),o.a.createElement("div",null,"Since we have set those settings:"),o.a.createElement(v,{className:"mv3",codeString:"".concat(JSON.stringify(i.sdkConfig,null,2))}),o.a.createElement("div",null,"When you change those values, you can notice the behavior of the SDK, on logs & network."),o.a.createElement("div",null,"It will impact the output of Flagship SDK Hooks as well, take a look below."))))},S=function(){Object(s.useFsActivate)(["btnColor","otherKey1","otherKey2"]);return o.a.createElement(d.a,null,o.a.createElement(m.a,null,o.a.createElement("div",{className:"fsAnchor",id:"useFsActivate"}),o.a.createElement(E.a,{variant:"dark",className:"fs-alert demoHook"},o.a.createElement(E.a.Heading,null,"useFsActivate"),o.a.createElement("p",null,"Use ",o.a.createElement("b",null,"useFsActivate")," hook to trigger activation of a modification:"),o.a.createElement(v,{className:"mv3",codeString:"useFsActivate([\n    'btnColor',\n    'otherKey1',\n    'otherKey2'\n]);                        "}),o.a.createElement("div",null,"In this example, keys"," ",o.a.createElement("i",null,"btnColor, otherKey1, otherKey2"),' have been activated. You can check on networks, a http request "activate" for each key specified in the array.'))))},F=function(){var e=Object(s.useFsModifications)([{key:"btnColor",defaultValue:"green",activate:!1}]);return o.a.createElement(d.a,null,o.a.createElement(m.a,null,o.a.createElement("div",{className:"fsAnchor",id:"useFsModifications"}),o.a.createElement(E.a,{variant:"dark",className:"fs-alert demoHook"},o.a.createElement(E.a.Heading,null,"useFsModifications"),o.a.createElement("p",null,"Use ",o.a.createElement("b",null,"useFsModifications")," hook to get the modifications:"),o.a.createElement(v,{className:"mv3",codeString:"import { useFsModifications } from '@flagship.io/react-sdk';\nconst fsModifications = useFsModifications([\n  {\n      key: 'btnColor',\n      defaultValue: 'green',\n      activate: false\n  }\n]);              "}),o.a.createElement("p",null,"Output: "),o.a.createElement("div",null,o.a.createElement(b.a,{variant:"secondary",style:{backgroundColor:e.btnColor}},"I'm a button customized with Flagship (backgroundColor=".concat(e.btnColor,")"))),o.a.createElement(v,{className:"mv3",codeString:'<Button\n    variant="secondary"\n    style={{\n        backgroundColor: fsModifications.btnColor\n    }}\n>\n    {`I\'m a button customized with Flagship (backgroundColor=${fsModifications.btnColor})`}\n</Button>'}))))},O=function(){var e=o.a.useState(!1),t=Object(c.a)(e,2),n=t[0],a=t[1],i=o.a.useState(!1),r=Object(c.a)(i,2),l=r[0],u=r[1];Object(s.useFsSynchronize)([n],l);return o.a.createElement(d.a,null,o.a.createElement(m.a,null,o.a.createElement("div",{className:"fsAnchor",id:"useFsSynchronize"}),o.a.createElement(E.a,{variant:"dark",className:"fs-alert demoHook"},o.a.createElement(E.a.Heading,null,"useFsSynchronize"),o.a.createElement("p",null,"Use ",o.a.createElement("b",null,"useFsSynchronize")," hook to trigger activation of a modification:"),o.a.createElement(v,{className:"mv3",codeString:"useFsActivate([listenedValue], activateAllModifications);"}),o.a.createElement(y.a,null,o.a.createElement(y.a.Group,{controlId:"demoFsSynchronize.ControlSelect1"},o.a.createElement(y.a.Label,null,"listenedValue"),o.a.createElement(y.a.Check,{type:"checkbox",checked:n,onChange:function(e){return a(e.currentTarget.checked)},label:"listenedValue=".concat(n)})),o.a.createElement(y.a.Group,{controlId:"demoFsSynchronize.ControlSelect2"},o.a.createElement(y.a.Label,null,"listenedValue"),o.a.createElement(y.a.Check,{type:"checkbox",checked:l,onChange:function(e){return u(e.currentTarget.checked)},label:"activateAllModifications=".concat(l)}))),o.a.createElement("div",null,"Switch value of ",o.a.createElement("b",null,"listenedValue")," will trigger a synchronize as it is set in the first argument of"," ",o.a.createElement("b",null,"useFsActivate"),"."),o.a.createElement("div",null,"You can also notice that enabling"," ",o.a.createElement("b",null,"activateAllModifications")," to true will modify the payload sent to the Flagship API and thus trigger an activate."))))},w=function(){var e=Object(s.useFlagship)({modifications:{requested:[{key:"btnColor",defaultValue:"green",activate:!1}]}}),t=e.modifications,n=e.status,a=e.hit;return o.a.createElement(d.a,null,o.a.createElement(m.a,null,o.a.createElement("div",{className:"fsAnchor",id:"useFlagship"}),o.a.createElement(E.a,{variant:"dark",className:"fs-alert demoHook"},o.a.createElement(E.a.Heading,null,"useFlagship"),o.a.createElement("p",null,"Use ",o.a.createElement("b",null,"useFlagship")," hook to get access to further stuff such as ",o.a.createElement("i",null,"modifications"),", ",o.a.createElement("i",null,"sdk status"),","," ",o.a.createElement("i",null,"hits")," :"),o.a.createElement(v,{className:"mv3",codeString:"import { useFlagship } from '@flagship.io/react-sdk';\nconst fsParams = {\n    modifications: {\n        requested: [\n            {\n                key: 'btnColor',\n                defaultValue: 'green',\n                activate: false\n            }\n        ]\n    }\n}\nconst {\n    modifications: fsModifications,\n    status: fsStatus,\n    hit: fsHit,\n} = useFlagship(fsParams);"}),o.a.createElement("h3",null,"1 - Playing with ",o.a.createElement("i",null,"fsModifications")),o.a.createElement("p",null,"demo: "),o.a.createElement("div",null,o.a.createElement(b.a,{variant:"secondary",style:{backgroundColor:t.btnColor}},"I'm a button customized with Flagship (backgroundColor=".concat(t.btnColor,")"))),o.a.createElement(v,{className:"mv3",codeString:'<Button\n    variant="secondary"\n    style={{\n        backgroundColor: fsModifications.btnColor\n    }}\n>\n    {`I\'m a button customized with Flagship (backgroundColor=${fsModifications.btnColor})`}\n</Button>'}),o.a.createElement("h3",null,"2 - Playing with ",o.a.createElement("i",null,"fsStatus")),o.a.createElement("div",{style:{marginBottom:16}},"If you're not familiar with the payload that you should a provide to the hit you want to send, you'll have all details available in the"," ",o.a.createElement("a",{href:"https://github.com/abtasty/flagship-js-sdk/blob/master/README.md#shape-of-possible-hits-to-send-1"},"SDK JS Hit documentation"),"."),o.a.createElement("p",null,"demo with Transaction Hit: "),o.a.createElement(v,{className:"mv3",codeString:"\nfsStatus=".concat(JSON.stringify(n,null,2),";\n                        ")}),o.a.createElement("h3",null,"3 - Playing with ",o.a.createElement("i",null,"hits")),o.a.createElement("p",null,"demo: "),o.a.createElement(v,{className:"mv3",codeString:"<Button\n    onClick={() => {\n        const mockHit = {\n            type: 'Transaction',\n            data: {\n                transactionId: '12451342423',\n                affiliation: 'myAffiliation',\n                totalRevenue: 999,\n                shippingCost: 888,\n                shippingMethod: 'myShippingMethod',\n                currency: 'myCurrency',\n                taxes: 1234444,\n                paymentMethod: 'myPaymentMethod',\n                itemCount: 2,\n                couponCode: 'myCOUPON',\n                documentLocation:\n                    'http%3A%2F%2Fabtastylab.com%2F60511af14f5e48764b83d36ddb8ece5a%2F',\n                pageTitle: 'myScreen'\n            }\n        };\n        fsHit.send(mockHit);\n    }}\n>\n    Send a transaction hit\n</Button>"}),o.a.createElement("div",null,o.a.createElement(b.a,{variant:"secondary",onClick:function(){a.send({type:"Transaction",data:{transactionId:"12451342423",affiliation:"myAffiliation",totalRevenue:999,shippingCost:888,shippingMethod:"myShippingMethod",currency:"myCurrency",taxes:1234444,paymentMethod:"myPaymentMethod",itemCount:2,couponCode:"myCOUPON",documentLocation:"http%3A%2F%2Fabtastylab.com%2F60511af14f5e48764b83d36ddb8ece5a%2F",pageTitle:"myScreen"}})}},"Send a transaction hit")),o.a.createElement(v,{className:"mv3",codeString:"<Button\n    onClick={() => {\n        const mockHit1 = {\n            type: 'Transaction',\n            data: {\n                transactionId: '12451342423',\n                affiliation: 'myAffiliation',\n                totalRevenue: 999,\n                shippingCost: 888,\n                shippingMethod: 'myShippingMethod',\n                currency: 'myCurrency',\n                taxes: 1234444,\n                paymentMethod: 'myPaymentMethod',\n                itemCount: 2,\n                couponCode: 'myCOUPON',\n                documentLocation:\n                    'http%3A%2F%2Fabtastylab.com%2F60511af14f5e48764b83d36ddb8ece5a%2F',\n                pageTitle: 'myScreen'\n            }\n        };\n        const mockHit2 = { ...mockHit1 };\n        mockHit2.data.transactionId = '999';\n        fsHit.sendMultiple([mockHit1, mockHit2]);\n    }}\n>\n    Send multiple transaction hits\n</Button>"}),o.a.createElement("div",null,o.a.createElement(b.a,{variant:"secondary",onClick:function(){var e={type:"Transaction",data:{transactionId:"12451342423",affiliation:"myAffiliation",totalRevenue:999,shippingCost:888,shippingMethod:"myShippingMethod",currency:"myCurrency",taxes:1234444,paymentMethod:"myPaymentMethod",itemCount:2,couponCode:"myCOUPON",documentLocation:"http%3A%2F%2Fabtastylab.com%2F60511af14f5e48764b83d36ddb8ece5a%2F",pageTitle:"myScreen"}},t=Object(l.a)({},e);t.data.transactionId="999",a.sendMultiple([e,t])}},"Send multiple transaction hits")))))},M=function(){var e=o.a.useState(!1),t=Object(c.a)(e,2),n=t[0],a=t[1];return o.a.useEffect((function(){if(n)throw new Error("Flagship - Creating an error just for test...");a(!1)}),[n]),o.a.createElement(d.a,null,o.a.createElement(m.a,null,o.a.createElement("div",{className:"fsAnchor",id:"safeMode"}),o.a.createElement(E.a,{variant:"dark",className:"fs-alert demoHook"},o.a.createElement(E.a.Heading,null,"Safe Mode"),o.a.createElement("p",null,"When an error occurs unexpectedly, the React SDK switch automatically into ",o.a.createElement("b",null,"Safe Mode"),". Thus, default value of modifications will always be returned. Moreover, other features will just log an error without crash. In a node environment other than"," ",o.a.createElement("i",null,"production"),", you can enable",o.a.createElement("i",null,"enableErrorLayout")," attribute, in the SDK settings"," ",o.a.createElement("a",{href:"#initialization"},"(Check above)"),"."),o.a.createElement("div",null,o.a.createElement(b.a,{variant:"secondary",onClick:function(){a(!0)}},"Throw an error")))))},I=function(){return o.a.createElement(u.a,{className:"mt3"},o.a.createElement(k,null),o.a.createElement(w,null),o.a.createElement(F,null),o.a.createElement(S,null),o.a.createElement(O,null),o.a.createElement(M,null))},j=n(126),x=n(128),N=n(125),D=n(58),_=n.n(D),A=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(j.a,{className:"fsNavbar",fixed:"top"},o.a.createElement(j.a.Brand,{href:"https://github.com/abtasty/flagship-js-sdk",className:"flex item-center"},o.a.createElement("img",{alt:"Logo Flagship",src:_.a,className:"d-inline-block align-top logoAdjust"}),"React SDK (Dev demo)"),o.a.createElement(x.a,{className:"mr-auto fsNav"},o.a.createElement(x.a.Link,{href:"#initialization"},"Initialization"),o.a.createElement(N.a,{title:"Hooks",id:"nav-dropdown"},o.a.createElement(N.a.Item,{eventKey:"4.0",href:"#useFlagship"},"useFlagship"),o.a.createElement(N.a.Item,{eventKey:"4.1",href:"#useFsModifications"},"useFsModifications"),o.a.createElement(N.a.Item,{eventKey:"4.2",href:"#useFsActivate"},"useFsActivate"),o.a.createElement(N.a.Item,{eventKey:"4.3",href:"#useFsSynchronize"},"useFsSynchronize")),o.a.createElement(N.a,{title:"Features",id:"nav-dropdown"},o.a.createElement(N.a.Item,{eventKey:"4.0",href:"#useFlagship"},"Get modification(s)"),o.a.createElement(N.a.Item,{eventKey:"4.1",href:"#useFsActivate"},"Activate modification(s)"),o.a.createElement(N.a.Item,{eventKey:"4.2",href:"#sendHits"},"Send Hit(s)"),o.a.createElement(N.a.Item,{eventKey:"4.4",href:"#safeMode"},"Safe Mode"))),o.a.createElement(y.a,{inline:!0},o.a.createElement(x.a.Link,{href:"https://github.com/abtasty/flagship-react-sdk"},"Github"),o.a.createElement(x.a.Link,{href:"https://www.abtasty.com/solutions-product-teams/"},"What is Flagship ?"))))},L=Object(a.createContext)(null),P=function(){var e=o.a.useState({envId:C.envId,sdkConfig:Object(l.a)({},C.sdkConfig),visitorData:Object(l.a)({},C.visitorData)}),t=Object(c.a)(e,2),n=t[0],a=t[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(L.Provider,{value:{currentSettings:n,setSettings:a}},o.a.createElement(s.FlagshipProvider,{envId:n.envId,config:n.sdkConfig,visitorData:n.visitorData,onInitStart:function(){console.log("React SDK init start")},onInitDone:function(){console.log("React SDK init done")},onUpdate:function(e){var t=e.fsModifications;console.log("React SDK updated with modifications:\n"+JSON.stringify(t))},loadingComponent:o.a.createElement(u.a,{className:"mt3"},o.a.createElement(d.a,null,o.a.createElement(m.a,{xs:12,style:{color:"white",height:"100vh",fontSize:"5vw"}},"Loading Flagship React SDK...")))},o.a.createElement(A,null),o.a.createElement(I,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(113);r.a.render(o.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},45:function(e,t,n){"use strict";var a=this&&this.__assign||function(){return(a=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},o=this&&this.__spreadArrays||function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var a=Array(e),o=0;for(t=0;t<n;t++)for(var i=arguments[t],r=0,l=i.length;r<l;r++,o++)a[o]=i[r];return a},i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var l=i(n(0)),c=r(n(73)),s=r(n(76)),u=r(n(77)),d={fsVisitor:null,log:null,fsModifications:null,status:{isLoading:!0,lastRefresh:null,hasError:!1}},m=l.default.createContext({state:a({},d),setState:null,hasError:!1});t.FlagshipProvider=function(e){var t=e.children,n=e.envId,i=e.config,r=e.visitorData,f=e.loadingComponent,h=e.initialModifications,p=e.onSavingModificationsInCache,g=e.onInitStart,v=e.onInitDone,E=e.onUpdate,y=r.id,b=r.context,C=l.useState(a(a({},d),{log:u.default.getLogger(i)})),k=C[0],S=C[1],F=l.useState(!1),O=F[0],w=F[1],M=k.status.isLoading,I=k.fsVisitor;l.useEffect((function(){var e=c.default.start(n,i).createVisitor(y,b);S(a(a({},k),{status:a(a({},k.status),{isLoading:!0}),fsVisitor:e})),h&&(e.fetchedModifications=a({},h)),g&&g(),e.on("saveCache",(function(e){p&&p(e)})),e.on("ready",(function(){S(a(a({},k),{status:a(a({},k.status),{isLoading:!1,lastRefresh:(new Date).toISOString()}),fsVisitor:e,fsModifications:e.fetchedModifications&&e.fetchedModifications.campaigns||null})),v&&v()}))}),o([n,y],Object.values(i),Object.values(b))),l.useEffect((function(){M||E&&E({fsModifications:k.fsModifications},k.fsVisitor)}),[k]);return l.default.createElement(m.Provider,{value:{state:k,setState:S,hasError:O}},l.default.createElement(s.default,{customerChildren:t,onError:function(e){w(!!e)},sdkSettings:i,log:k.log},f&&!I?l.default.createElement(l.default.Fragment,null,f):l.default.createElement(l.default.Fragment,null,t)))},t.FlagshipProvider.defaultProps={config:{enableErrorLayout:!1},loadingComponent:void 0,initialModifications:void 0,onInitStart:function(){},onInitDone:function(){},onSavingModificationsInCache:function(){},onUpdate:function(){}},t.FlagshipConsumer=m.Consumer,t.default=m},58:function(e,t,n){e.exports=n.p+"static/media/Flagship-horizontal-product-white.6e8b90f3.png"},64:function(e,t,n){e.exports=n(114)},71:function(e,t,n){},72:function(e,t,n){},76:function(e,t,n){"use strict";var a=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function a(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}(),o=this&&this.__assign||function(){return(o=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(0)),l={display:"inline-block",verticalAlign:"middle",border:"1px solid transparent",padding:"0.375rem 0.75rem",fontSize:"1rem",lineHeight:1.5,borderRadius:"0.25rem",marginLeft:"16px",transition:"background-color 0.15s ease-in-out,\n        border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out"},c=function(e){function t(t){var n=e.call(this,t)||this;return n.state={error:null,errorInfo:null,isCollapse:!1},n}return a(t,e),t.prototype.componentDidCatch=function(e,t){this.props.onError(e),this.props.log.fatal("An error occurred. The SDK is switching into safe mode:\n"+e.stack),this.setState({error:e,errorInfo:t})},t.prototype.render=function(){var e=this,t=this.state,n=t.error,a=t.errorInfo,i=t.isCollapse,c=this.props,s=c.children,u=c.customerChildren,d=c.sdkSettings,m=d.nodeEnv,f=d.enableErrorLayout;return a?r.default.createElement(r.default.Fragment,null,"production"!==m&&f&&r.default.createElement("div",{className:"fsErrorDebugContainer",style:{backgroundColor:"red",minHeight:"6vh",position:"fixed",zIndex:9999,bottom:0,width:"100%",opacity:i?1:.4,display:"flex",flexDirection:"column",padding:"0px 16px",transition:"opacity 0.5s ease-in-out"}},r.default.createElement("div",{style:{display:"flex",alignItems:"center",width:"100%",marginBottom:"8px",marginTop:"8px"}},r.default.createElement("h3",{style:{color:"white"}},"Flagship React SDK has crashed."),r.default.createElement("button",{style:o({},l),onClick:function(){e.setState(o(o({},e.state),{isCollapse:!i}))}},i?"Hide details":"Show details")),n&&r.default.createElement("div",{style:{maxHeight:i?200:0,overflow:"auto",color:"wheat",whiteSpace:"pre-line",transition:"max-height 0.5s ease-in-out"}},""+n.stack)),r.default.createElement("div",null,u)):s},t}(r.default.Component);t.default=c},77:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={getLogger:function(e,t){void 0===e&&(e={enableConsoleLogs:!1,nodeEnv:"unknown"}),void 0===t&&(t="Flagship React SDK");var n=e.enableConsoleLogs,a="["+(new Date).toISOString().slice(11,-5)+"] - ";return{warn:function(e){return n?console.warn(""+a+t+" - "+e):null},error:function(e){return n?console.error(""+a+t+" - "+e):null},info:function(e){return n?console.log(""+a+t+" - "+e):null},fatal:function(e){return n?console.error(""+a+t+" - Fatal: "+e):null},debug:function(o){return"production"!==e.nodeEnv&&n?console.log(""+a+t+" - Debug: "+o):null}}}};t.default=a},78:function(e,t,n){"use strict";var a=this&&this.__assign||function(){return(a=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),r=o(n(45)),l=function(e){e.error("sdk not correctly initialized... Make sure fsVisitor is ready.")};t.useFsActivate=function(e,t){void 0===t&&(t=[]);var n=i.useContext(r.default).state;i.useEffect((function(){var t=n.fsVisitor;t?t.activateModifications(e.map((function(e){return{key:e}}))):l(n.log)}),t)},t.useFsSynchronize=function(e,t){void 0===e&&(e=[]),void 0===t&&(t=!1);var n=i.useContext(r.default),o=n.state,c=n.setState;i.useEffect((function(){var e=o.fsVisitor;e?e.synchronizeModifications(t).then((function(){if(!c)throw new Error("Error: useFsSynchronize > useEffect, setState is undefined");c(a(a({},o),{fsVisitor:e,status:a(a({},o.status),{isLoading:!1,lastRefresh:(new Date).toISOString()})}))})):l(o.log)}),e)};var c=function(e,t){return void 0===t&&(t=!1),e.reduce((function(e,t){var n=a({},e);return n[t.key]=t.defaultValue,n}),{})},s=function(e,t,n,a){return void 0===n&&(n=!1),e?e.getModifications(t,n):(a.warn("fsVisitor not initialized, returns default value"),c(t,n))};t.useFsModifications=function(e,t){void 0===t&&(t=!1);var n=i.useContext(r.default).state,a=n.fsVisitor,o=n.log;return s(a,e,t,o)},t.useFlagship=function(e){var t=e.modifications,n=t.requested,a=t.activateAll,o=void 0!==a&&a,l=i.useContext(r.default),u=l.hasError,d=l.state,m=d.fsVisitor,f=d.status,h=d.log;if(u)return{modifications:c(n,o),status:f,hit:{send:function(){h.error("send hit skipped because is out of order.")},sendMultiple:function(){h.error("send multiple hits skipped because is out of order.")}}};var p=function(){h.error("SDK not ready yet.")},g=function(e){m&&m.sendHit?m.sendHit(e):p()},v=function(e){m&&m.sendHits?m.sendHits(e):p()};return g.bind(m),v.bind(m),{modifications:s(m,n,o,h),status:f,hit:{send:g,sendMultiple:v}}}}},[[64,1,2]]]);
//# sourceMappingURL=main.0b291df5.chunk.js.map