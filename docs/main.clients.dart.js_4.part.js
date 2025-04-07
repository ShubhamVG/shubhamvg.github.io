((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.clients.dart.js_4",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
kR(d){var x=Math.abs(d),w=d<0?"-":""
if(x>=1000)return""+d
if(x>=100)return w+"0"+x
if(x>=10)return w+"00"+x
return w+"000"+x},
j6(d){if(d>=100)return""+d
if(d>=10)return"0"+d
return"00"+d},
di(d){if(d>=10)return""+d
return"0"+d},
j7(d,e){return new B.af(d+1000*e)},
aw:function aw(d,e,f){this.a=d
this.b=e
this.c=f},
li(){return Date.now()},
a3(d){if(d.date===void 0)d.date=new Date(d.a)
return d.date},
lm(d){return d.c?A.a3(d).getUTCFullYear()+0:A.a3(d).getFullYear()+0},
jg(d){return d.c?A.a3(d).getUTCMonth()+1:A.a3(d).getMonth()+1},
jd(d){return d.c?A.a3(d).getUTCDate()+0:A.a3(d).getDate()+0},
je(d){return d.c?A.a3(d).getUTCHours()+0:A.a3(d).getHours()+0},
jf(d){return d.c?A.a3(d).getUTCMinutes()+0:A.a3(d).getMinutes()+0},
ll(d){return d.c?A.a3(d).getUTCSeconds()+0:A.a3(d).getSeconds()+0},
lk(d){return d.c?A.a3(d).getUTCMilliseconds()+0:A.a3(d).getMilliseconds()+0}}
B=c[0]
C=c[2]
A=a.updateHolder(c[10],A)
A.aw.prototype={
bC(d){var x=1000,w=C.b.a6(d,x),v=C.b.N(d-w,x),u=this.b+w,t=C.b.a6(u,x),s=this.a+C.b.N(u-t,x)+v,r=this.c
if(s<-864e13||s>864e13)B.R(B.cg(s,-864e13,864e13,"millisecondsSinceEpoch",null))
if(s===864e13&&t!==0)B.R(B.ex(t,"microsecond","Time including microseconds is outside valid range"))
B.hz(r,"isUtc",y.e)
return new A.aw(s,t,r)},
D(d,e){if(e==null)return!1
return e instanceof A.aw&&this.a===e.a&&this.b===e.b&&this.c===e.c},
gv(d){return B.dF(this.a,this.b,C.d,C.d)},
U(d,e){var x
y.f.a(e)
x=C.b.U(this.a,e.a)
if(x!==0)return x
return C.b.U(this.b,e.b)},
i(d){var x=this,w=A.kR(A.lm(x)),v=A.di(A.jg(x)),u=A.di(A.jd(x)),t=A.di(A.je(x)),s=A.di(A.jf(x)),r=A.di(A.ll(x)),q=A.j6(A.lk(x)),p=x.b,o=p===0?"":A.j6(p)
p=w+"-"+v
if(x.c)return p+"-"+u+" "+t+":"+s+":"+r+"."+q+o+"Z"
else return p+"-"+u+" "+t+":"+s+":"+r+"."+q+o},
$ia0:1}
var z=a.updateTypes(["b()"]);(function installTearOffs(){var x=a._static_0
x(A,"mD","li",0)})();(function inheritance(){var x=a.inherit
x(A.aw,B.j)})()
B.aE(b.typeUniverse,JSON.parse('{"aw":{"a0":["aw"]}}'))
var y={f:B.u("aw"),e:B.u("bj")}};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.clients.dart.js_4",e:"endPart",h:b})})($__dart_deferred_initializers__,"LDnWwzcd1ZB0QL/42E7HZLIdfYY=");
//# sourceMappingURL=main.clients.dart.js_4.part.js.map
