(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{390:function(e,t,s){"use strict";s.r(t);var a=s(25),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"connect-wifi"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#connect-wifi"}},[e._v("#")]),e._v(" Connect WiFi")]),e._v(" "),s("h2",{attrs:{id:"purpose"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#purpose"}},[e._v("#")]),e._v(" Purpose")]),e._v(" "),s("p",[e._v("To disconnect from wired ethernet connection and use WiFi instead, which makes it easier to relocate the node.")]),e._v(" "),s("h2",{attrs:{id:"remote-login-to-mynode"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#remote-login-to-mynode"}},[e._v("#")]),e._v(" Remote login to myNode")]),e._v(" "),s("p",[e._v("Follow instructions to access the "),s("RouterLink",{attrs:{to:"/advanced/linux-terminal.html"}},[e._v("linux terminal")])],1),e._v(" "),s("h2",{attrs:{id:"check-device-status"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#check-device-status"}},[e._v("#")]),e._v(" Check device status")]),e._v(" "),s("ul",[s("li",[e._v("Type "),s("code",[e._v("nmcli dev status")]),e._v(" and press Enter. You should find the ethernet to be connected and WiFi disconnected.")])]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("DEVICE  TYPE      STATE         CONNECTION         \neth0    ethernet  connected     Wired connection "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" \nwlan0   wifi      disconnected  --                 \nlo      loopback  unmanaged     -- \n")])])]),s("h2",{attrs:{id:"connect-to-new-network"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#connect-to-new-network"}},[e._v("#")]),e._v(" Connect to new network")]),e._v(" "),s("ol",[s("li",[s("code",[e._v("sudo nmtui")])]),e._v(" "),s("li",[e._v("Enter password")]),e._v(" "),s("li",[e._v("Use up/down and left/right keys to navigate.")]),e._v(" "),s("li",[e._v('Select "Activate Connection" and press Enter.')]),e._v(" "),s("li",[e._v("Select the WiFi name. Press Enter.")]),e._v(" "),s("li",[e._v("Enter the WiFi password. Press Enter.")]),e._v(" "),s("li",[e._v("An asterisk should appear next to the WiFi name.")]),e._v(" "),s("li",[e._v("Press Escape key twice to quit.")])]),e._v(" "),s("center",[s("p",[s("img",{attrs:{src:"/images/wifi/wifi-1.png",alt:"NMTUI"}})])]),e._v(" "),s("center",[s("figure",[s("img",{staticClass:"app-screenshot",attrs:{src:"/images/wifi/wifi-2.png"}})])]),e._v(" "),s("h2",{attrs:{id:"recheck-device-status"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#recheck-device-status"}},[e._v("#")]),e._v(" Recheck device status")]),e._v(" "),s("ul",[s("li",[e._v("Type "),s("code",[e._v("nmcli dev status")]),e._v(" and press Enter. You should see that WiFi is now connected.")])]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("DEVICE  TYPE      STATE      CONNECTION         \neth0    ethernet  connected  Wired connection "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" \nwlan0   wifi      connected  "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("WIFI SSID"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("          \nlo      loopback  unmanaged  --\n\n")])])]),s("h2",{attrs:{id:"disconnect-ethernet-cable"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#disconnect-ethernet-cable"}},[e._v("#")]),e._v(" Disconnect Ethernet cable")]),e._v(" "),s("p",[e._v("You can safely remove the ethernet cable.")]),e._v(" "),s("h2",{attrs:{id:"find-new-ip"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#find-new-ip"}},[e._v("#")]),e._v(" Find new IP")]),e._v(" "),s("ol",[s("li",[e._v("Type "),s("code",[e._v("ifconfig wlan0 | grep inet")]),e._v(" to find the IP address on wireless network. Example")])]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("ifconfig")]),e._v(" wlan0 "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("grep")]),e._v(" inet\ninet "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("LOCAL-IP"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("  netmask "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("255.255")]),e._v(".255.0  broadcast "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("10.0")]),e._v(".0.255\ninet6 "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("LOCAL-IPv"),s("span",{pre:!0,attrs:{class:"token operator"}},[s("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[e._v("6")]),e._v(">")]),e._v("  prefixlen "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("64")]),e._v("  scopeid 0x2"),s("span",{pre:!0,attrs:{class:"token operator"}},[s("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[e._v("0")]),e._v("<")]),e._v("link"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[e._v("Use the "),s("code",[e._v("LOCAL-IP")]),e._v(" listed beside "),s("code",[e._v("inet")]),e._v(" to access your node once it is disconnected from wired network")])]),e._v(" "),s("h2",{attrs:{id:"reconfigure-lnd-for-new-ip"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reconfigure-lnd-for-new-ip"}},[e._v("#")]),e._v(" Reconfigure LND for new IP")]),e._v(" "),s("p",[e._v('If you are using apps like Zap to remotely access your lightning node, you might have to regenerate the TLS certificates. To do so, go to the LND page of your myNode and click on "regenerate" button in the row of "TLS Certification".')]),e._v(" "),s("center",[s("p",[s("img",{attrs:{src:"/images/wifi/wifi-3.png",alt:"LND regenerate certificates"}})])]),e._v(" "),s("h2",{attrs:{id:"reconfigure-vpn-port-forwarding"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reconfigure-vpn-port-forwarding"}},[e._v("#")]),e._v(" Reconfigure VPN port forwarding")]),e._v(" "),s("p",[e._v("If you are using the VPN to remotely access your node, you need to change the IP address corresponding to the forwarded port in your router settings. Please refer your router manufacturer's website to find out how to forward ports.")])],1)}),[],!1,null,null,null);t.default=r.exports}}]);