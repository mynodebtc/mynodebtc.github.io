(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{377:function(s,a,t){"use strict";t.r(a);var e=t(26),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"setup-base-image-rockpro64"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#setup-base-image-rockpro64"}},[s._v("#")]),s._v(" Setup Base Image (ROCKPro64)")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("After Armbian Flash")]),s._v(" "),t("ul",[t("li",[s._v("Login with root / 1234")]),s._v(" "),t("li",[s._v("Change root password to something longish like boltbolt")]),s._v(" "),t("li",[s._v("Create admin user with password bolt")])])]),s._v(" "),t("li",[t("p",[s._v("Login as admin")])]),s._v(" "),t("li",[t("p",[s._v("Delete root password")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("passwd")]),s._v(" -d root\n")])])])]),s._v(" "),t("li",[t("p",[s._v("Set hostname")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"myNode"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tee")]),s._v(" /etc/hostname\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/rock64/myNode/g'")]),s._v(" /etc/hosts\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# OR armbian-config -> Personal -> Hostname")]),s._v("\n")])])])]),s._v(" "),t("li",[t("p",[s._v("Update packages")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" -y upgrade\n")])])])]),s._v(" "),t("li",[t("p",[s._v("Install some necessary tools")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" -y "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" network-manager tmux\n")])])])]),s._v(" "),t("li",[t("p",[s._v("Regenerate MAC Address for RockPro64")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" /usr/lib/armbian/armbian-common\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CONNECTION")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("nmcli -f UUID,ACTIVE,DEVICE,TYPE connection show --active "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tail")]),s._v(" -n1"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("UUID")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" -F"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('" "')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/ethernet/ {print "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v("}'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<<")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${CONNECTION}")]),s._v('"')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\nget_random_mac\nnmcli connection modify "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$UUID")]),s._v(" ethernet.cloned-mac-address "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MACADDR")]),s._v("\nnmcli connection modify "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$UUID")]),s._v(" -ethernet.mac-address "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n")])])])]),s._v(" "),t("li",[t("p",[s._v("Sync")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sync")]),s._v("\n")])])])]),s._v(" "),t("li",[t("p",[s._v("Make image now (if imaging)")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);