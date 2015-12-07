// Do not edit this file; automatically generated by build.py.
'use strict';

Blockly.AESL=new Blockly.Generator("AESL");Blockly.AESL.INDENT="\t";Blockly.AESL.addReservedWords("var,if,then,else,end,when,do,for,in,step,while,call,callsub,sub,onevent,emit,or,and,not,abs,event,button,buttons,prox,motor,acc,temperature,rc5,mic,timer,math,sound,leds,sd");Blockly.AESL.ORDER_ATOMIC=0;Blockly.AESL.ORDER_INDEX=1;Blockly.AESL.ORDER_MINUS=1;Blockly.AESL.ORDER_BINARY_NOT=2;Blockly.AESL.ORDER_ABS=3;Blockly.AESL.ORDER_MULT=4;Blockly.AESL.ORDER_ADD=5;Blockly.AESL.ORDER_SHIFT=6;
Blockly.AESL.ORDER_BINARY_AND=7;Blockly.AESL.ORDER_BINARY_XOR=8;Blockly.AESL.ORDER_BINARY_OR=9;Blockly.AESL.ORDER_CONDITION=10;Blockly.AESL.ORDER_LOGICAL_NOT=11;Blockly.AESL.ORDER_LOGICAL_AND=12;Blockly.AESL.ORDER_LOGICAL_OR=13;Blockly.AESL.ORDER_ASSIGNMENT=14;Blockly.AESL.ORDER_INCREMENT=15;Blockly.AESL.ORDER_NONE=99;
Blockly.AESL.init=function(a){Blockly.AESL.definitions_=Object.create(null);Blockly.AESL.functionNames_=Object.create(null);Blockly.AESL.variableDB_?Blockly.AESL.variableDB_.reset():Blockly.AESL.variableDB_=new Blockly.Names(Blockly.AESL.RESERVED_WORDS_);Blockly.AESL.subroutines=[];Blockly.AESL.arrays=[]};
Blockly.AESL.finish=function(a){if("undefined"!==typeof workspace)for(var b=Blockly.Variables.allVariables(workspace),c=0;c<b.length;c++)Blockly.AESL.variableDB_.getName(b[c],Blockly.Variables.NAME_TYPE);var c=[],b=Blockly.AESL.variableDB_.dbReverse_,d;for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(d in Blockly.AESL.arrays?c.push("var "+d+"["+Blockly.AESL.arrays[d]+"]"):d in Blockly.AESL.subroutines||c.push("var "+d));c.length&&c.push("");var e=[];e.push(c.join("\n"));a.length&&e.push(a);
for(var f in Blockly.AESL.subroutines)e.push(Blockly.AESL.subroutines[f]);for(f in Blockly.AESL.definitions_)e.push(Blockly.AESL.definitions_[f]);a=e.join("\n\n");for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=new RegExp("@variable:"+d+"@","g"),d in Blockly.AESL.arrays?a=a.replace(f,d+"[0]"):d in Blockly.AESL.subroutines||(a=a.replace(f,d)));delete Blockly.AESL.definitions_;delete Blockly.AESL.functionNames_;Blockly.AESL.variableDB_.reset();Blockly.AESL.subroutines=[];Blockly.AESL.arrays=
[];return a};Blockly.AESL.scrubNakedValue=function(a){return a+"\n"};Blockly.AESL.addEventHandler=function(a,b){Object.prototype.hasOwnProperty.call(Blockly.AESL.definitions_,"onevent "+a)?Blockly.AESL.definitions_["onevent "+a]+="\n":Blockly.AESL.definitions_["onevent "+a]="onevent "+a+"\n";Blockly.AESL.definitions_["onevent "+a]+=b};Blockly.AESL.addSubroutine=function(a,b){Blockly.AESL.subroutines[a]="sub "+a+"\n"+b};
Blockly.AESL.checkValueBlockType=function(a){if(!a)return!1;if(a.outputConnection.check_){if(0>a.outputConnection.check_.indexOf("Number"))return!1}else if("variables_get"!=a.type)return!1;return!0};Blockly.AESL.quote_=function(a){a=a.replace(/\\/g,"\\\\").replace(/\n/g,"\\\n").replace(/'/g,"\\'");return"'"+a+"'"};
Blockly.AESL.scrub_=function(a,b){var c="";if(!a.outputConnection||!a.outputConnection.targetConnection){var d=a.getCommentText();d&&(c+=Blockly.AESL.prefixLines(d,"# ")+"\n");for(var e=0;e<a.inputList.length;e++)a.inputList[e].type==Blockly.INPUT_VALUE&&(d=a.inputList[e].connection.targetBlock())&&(d=Blockly.AESL.allNestedComments(d))&&(c+=Blockly.AESL.prefixLines(d,"# "))}e=a.nextConnection&&a.nextConnection.targetBlock();e=Blockly.AESL.blockToCode(e);return c+b+e};Blockly.AESL.variables={};Blockly.AESL.variables_get=function(a){return["@variable:"+Blockly.AESL.variableDB_.getName(a.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE)+"@",Blockly.AESL.ORDER_ATOMIC]};
Blockly.AESL.variables_set=function(a){var b=Blockly.AESL.variableDB_.getName(a.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE),c=this.getInputTargetBlock("VALUE");a=Blockly.AESL.checkValueBlockType(c)?Blockly.AESL.valueToCode(a,"VALUE",Blockly.AESL.ORDER_ASSIGNMENT)||"0":"0";return"@variable:"+b+"@ = "+a+"\n"};Blockly.AESL.procedures={};Blockly.AESL.procedures_defnoreturn=function(a){var b=Blockly.AESL.variableDB_.getName(a.getFieldValue("NAME"),Blockly.Procedures.NAME_TYPE);a=Blockly.AESL.statementToCode(a,"STACK");if(-1!=a.indexOf("\tcallsub "))return Blockly.AESL.addSubroutine(b,""),null;Blockly.AESL.addSubroutine(b,a);return null};Blockly.AESL.procedures_callnoreturn=function(a){return"callsub "+Blockly.AESL.variableDB_.getName(a.getFieldValue("NAME"),Blockly.Procedures.NAME_TYPE)+"\n"};Blockly.AESL.thymio={};function hexToRgb(a){return(a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a))?{r:parseInt(a[1],16),g:parseInt(a[2],16),b:parseInt(a[3],16)}:null}function rgbToAesl(a){return a?{r:Math.round(a.r/8),g:Math.round(a.g/8),b:Math.round(a.b/8)}:null}function hexToAesl(a){return rgbToAesl(hexToRgb(a))}Blockly.AESL.thymio_when=function(a){var b=Blockly.AESL.valueToCode(a,"WHEN",Blockly.AESL.ORDER_NONE);a=Blockly.AESL.statementToCode(a,"DO");return"when "+b+" do\n"+a+"end\n"};
Blockly.AESL.thymio_for=function(a){var b=Blockly.AESL.variableDB_.getName(a.getFieldValue("ITER"),Blockly.Variables.NAME_TYPE),c=parseInt(a.getFieldValue("FROM")),d=parseInt(a.getFieldValue("TO"));a=Blockly.AESL.statementToCode(a,"DO");return"for "+b+" in "+c+":"+d+" do\n"+a+"end\n"};
Blockly.AESL.thymio_subroutine_define=function(a){var b=Blockly.AESL.variableDB_.getName(a.getFieldValue("NAME"),Blockly.Procedures.NAME_TYPE);a=Blockly.AESL.statementToCode(a,"STACK");if(-1!=a.indexOf("\tcallsub "))return Blockly.AESL.addSubroutine(b,""),null;Blockly.AESL.addSubroutine(b,a);return null};Blockly.AESL.thymio_event=function(a){var b=a.getFieldValue("EVENT");a=Blockly.AESL.statementToCode(a,"HANDLER");Blockly.AESL.addEventHandler(b,a);return null};
Blockly.AESL.thymio_event_button=function(a){var b=a.getFieldValue("BUTTON"),c=a.getFieldValue("MODE");a=Blockly.AESL.statementToCode(a,"HANDLER");c="\twhen "+b+" == "+("PRESS"==c?"1":"0")+" do\n";0<a.length&&(c+=Blockly.AESL.prefixLines(a,"\t"));Blockly.AESL.addEventHandler(b,c+"\tend\n");return null};
Blockly.AESL.thymio_event_prox=function(a){var b=a.getFieldValue("SENSOR"),c=a.getFieldValue("MODE");a=Blockly.AESL.statementToCode(a,"HANDLER");b="\twhen "+b+("PROX"==c?" > 2000":" < 1000")+" do\n";0<a.length&&(b+=Blockly.AESL.prefixLines(a,"\t"));Blockly.AESL.addEventHandler("prox",b+"\tend\n");return null};
Blockly.AESL.thymio_event_prox_ground=function(a){var b=a.getFieldValue("SENSOR"),c=a.getFieldValue("MODE");a=Blockly.AESL.statementToCode(a,"HANDLER");b="\twhen "+b+("BLACK"==c||"PROX"==c?" > 450":" < 400")+" do\n";0<a.length&&(b+=Blockly.AESL.prefixLines(a,"\t"));Blockly.AESL.addEventHandler("prox",b+"\tend\n");return null};Blockly.AESL.thymio_event_shock=function(a){a=Blockly.AESL.statementToCode(a,"HANDLER");Blockly.AESL.addEventHandler("tap",a);return null};Blockly.AESL.thymio_event_timer=Blockly.AESL.thymio_event;
Blockly.AESL.thymio_event_sound=Blockly.AESL.thymio_event;Blockly.AESL.thymio_event_acc=Blockly.AESL.thymio_event;Blockly.AESL.thymio_event_receive=Blockly.AESL.thymio_event;Blockly.AESL.thymio_event_update=Blockly.AESL.thymio_event;Blockly.AESL.thymio_led=function(a){var b=a.getFieldValue("LED");a=hexToAesl(a.getFieldValue("COLOR"));return"call "+b+"("+a.r+","+a.g+","+a.b+")\n"};
Blockly.AESL.thymio_led_rgb=function(a){var b=a.getFieldValue("LED"),c=Blockly.AESL.valueToCode(a,"RED",Blockly.AESL.ORDER_NONE)||"0",d=Blockly.AESL.valueToCode(a,"GREEN",Blockly.AESL.ORDER_NONE)||"0";a=Blockly.AESL.valueToCode(a,"BLUE",Blockly.AESL.ORDER_NONE)||"0";return"call "+b+"("+c+","+d+","+a+")\n"};
Blockly.AESL.thymio_led_circle=function(a){var b=Blockly.AESL.valueToCode(a,"CIRCLE0",Blockly.AESL.ORDER_NONE)||"0",c=Blockly.AESL.valueToCode(a,"CIRCLE1",Blockly.AESL.ORDER_NONE)||"0",d=Blockly.AESL.valueToCode(a,"CIRCLE2",Blockly.AESL.ORDER_NONE)||"0",e=Blockly.AESL.valueToCode(a,"CIRCLE3",Blockly.AESL.ORDER_NONE)||"0",f=Blockly.AESL.valueToCode(a,"CIRCLE4",Blockly.AESL.ORDER_NONE)||"0",g=Blockly.AESL.valueToCode(a,"CIRCLE5",Blockly.AESL.ORDER_NONE)||"0",h=Blockly.AESL.valueToCode(a,"CIRCLE6",Blockly.AESL.ORDER_NONE)||
"0";a=Blockly.AESL.valueToCode(a,"CIRCLE7",Blockly.AESL.ORDER_NONE)||"0";return"call leds.circle("+b+","+c+","+d+","+e+","+f+","+g+","+h+","+a+")\n"};
Blockly.AESL.thymio_led_prox=function(a){var b=Blockly.AESL.valueToCode(a,"PROX0",Blockly.AESL.ORDER_NONE)||"0",c=Blockly.AESL.valueToCode(a,"PROX1",Blockly.AESL.ORDER_NONE)||"0",d=Blockly.AESL.valueToCode(a,"PROX2",Blockly.AESL.ORDER_NONE)||"0",e=Blockly.AESL.valueToCode(a,"PROX3",Blockly.AESL.ORDER_NONE)||"0",f=Blockly.AESL.valueToCode(a,"PROX4",Blockly.AESL.ORDER_NONE)||"0",g=Blockly.AESL.valueToCode(a,"PROX5",Blockly.AESL.ORDER_NONE)||"0",h=Blockly.AESL.valueToCode(a,"PROX6",Blockly.AESL.ORDER_NONE)||
"0";a=Blockly.AESL.valueToCode(a,"PROX7",Blockly.AESL.ORDER_NONE)||"0";return"call leds.prox.h("+b+","+c+","+d+","+e+","+f+","+g+","+h+","+a+")\n"};Blockly.AESL.thymio_led_prox_ground=function(a){var b=Blockly.AESL.valueToCode(a,"PROX0",Blockly.AESL.ORDER_NONE)||"0";a=Blockly.AESL.valueToCode(a,"PROX1",Blockly.AESL.ORDER_NONE)||"0";return"call leds.prox.v("+b+","+a+")\n"};
Blockly.AESL.thymio_led_button=function(a){var b=Blockly.AESL.valueToCode(a,"FORWARD",Blockly.AESL.ORDER_NONE)||"0",c=Blockly.AESL.valueToCode(a,"RIGHT",Blockly.AESL.ORDER_NONE)||"0",d=Blockly.AESL.valueToCode(a,"BACKWARD",Blockly.AESL.ORDER_NONE)||"0";a=Blockly.AESL.valueToCode(a,"LEFT",Blockly.AESL.ORDER_NONE)||"0";return"call leds.buttons("+b+","+c+","+d+","+a+")\n"};
Blockly.AESL.thymio_led_temperature=function(a){var b=Blockly.AESL.valueToCode(a,"RED",Blockly.AESL.ORDER_NONE)||"0";a=Blockly.AESL.valueToCode(a,"BLUE",Blockly.AESL.ORDER_NONE)||"0";return"call leds.temperature("+b+","+a+")\n"};Blockly.AESL.thymio_led_rc_sound=function(a){var b=a.getFieldValue("LED");a=Blockly.AESL.valueToCode(a,"INTENSITY",Blockly.AESL.ORDER_NONE)||"0";return"call "+b+"("+a+")\n"};
Blockly.AESL.thymio_led_off=function(a){a=a.getFieldValue("LED");var b="";"leds.top"==a||"leds.bottom.left"==a||"leds.bottom.right"==a?b="0,0,0":"leds.circle"==a||"leds.prox.h"==a?b="0,0,0,0,0,0,0,0":"leds.prox.v"==a||"leds.temperature"==a?b="0,0":"leds.rc"==a||"leds.sound"==a?b="0":"leds.buttons"==a&&(b="0,0,0,0");return"call "+a+"("+b+")\n"};Blockly.AESL.thymio_sound_system=function(a){return"call sound.system("+a.getFieldValue("SOUND")+")\n"};
Blockly.AESL.thymio_sound_note=function(a){var b=Blockly.AESL.valueToCode(a,"FREQ",Blockly.AESL.ORDER_NONE)||"0";a=Blockly.AESL.valueToCode(a,"DURATION",Blockly.AESL.ORDER_NONE)||"0";return"call sound.freq("+b+","+a+")\n"};Blockly.AESL.thymio_sound_stop=function(a){return"call sound.system(-1)\n"};Blockly.AESL.thymio_button_pressed=function(a){return[a.getFieldValue("BUTTON")+" == 1",Blockly.AESL.ORDER_LOGICAL_AND]};
Blockly.AESL.thymio_prox_check=function(a){var b=a.getFieldValue("SENSOR"),c="",c="PROX"==a.getFieldValue("MODE")?" > 2000":" < 1000";return[b+c,Blockly.AESL.ORDER_CONDITION]};Blockly.AESL.thymio_prox_ground_check=function(a){var b=a.getFieldValue("SENSOR");a=a.getFieldValue("MODE");return[b+("BLACK"==a||"PROX"==a?" > 450":" < 400"),Blockly.AESL.ORDER_CONDITION]};Blockly.AESL.thymio_sensor=function(a){return[a.getFieldValue("SENSOR"),Blockly.AESL.ORDER_ATOMIC]};
Blockly.AESL.thymio_sensor_temperature=function(a){return["temperature",Blockly.AESL.ORDER_ATOMIC]};Blockly.AESL.thymio_sensor_mic=function(a){return["mic.intensity",Blockly.AESL.ORDER_ATOMIC]};Blockly.AESL.thymio_sensor_comm=function(a){return["prox.comm.rx",Blockly.AESL.ORDER_ATOMIC]};Blockly.AESL.thymio_sensor_prox=Blockly.AESL.thymio_sensor;Blockly.AESL.thymio_sensor_motor=Blockly.AESL.thymio_sensor;Blockly.AESL.thymio_sensor_acc=Blockly.AESL.thymio_sensor;Blockly.AESL.thymio_sensor_rc=Blockly.AESL.thymio_sensor;
Blockly.AESL.thymio_motors_start=function(a){var b=a.getFieldValue("COMMAND");a=Blockly.AESL.valueToCode(a,"SPEED",Blockly.AESL.ORDER_ASSIGNMENT)||"0";var c=0,d=0;"FORWARD"==b?d=c=a:"BACKWARD"==b?(c=-a,d=-a):"TURNLEFT"==b?(c=0,d=a):"TURNRIGHT"==b?(c=a,d=0):"TURNBACKWARDLEFT"==b?(c=0,d=-a):"TURNBACKWARDRIGHT"==b?(c=-a,d=0):"SPINCCW"==b?(c=-a,d=a):"SPINCW"==b&&(c=a,d=-a);return"motor.left.target = "+c+"\nmotor.right.target = "+d+"\n"};Blockly.AESL.thymio_motors_stop=function(a){return"motor.left.target = 0\nmotor.right.target = 0\n"};
Blockly.AESL.thymio_actuator=function(a){var b=a.getFieldValue("VARIABLE");a=Blockly.AESL.valueToCode(a,"VALUE",Blockly.AESL.ORDER_ASSIGNMENT)||"0";return b+" = "+a+"\n"};Blockly.AESL.thymio_actuator_mic=function(a){return"mic.threshold = "+(Blockly.AESL.valueToCode(a,"VALUE",Blockly.AESL.ORDER_ASSIGNMENT)||"0")+"\n"};Blockly.AESL.thymio_actuator_comm=function(a){return"prox.comm.tx = "+(Blockly.AESL.valueToCode(a,"VALUE",Blockly.AESL.ORDER_ASSIGNMENT)||"0")+"\n"};
Blockly.AESL.thymio_actuator_timer=Blockly.AESL.thymio_actuator;Blockly.AESL.thymio_actuator_motor=Blockly.AESL.thymio_actuator;Blockly.AESL.thymio_variable_get=function(a){return["@variable:"+Blockly.AESL.variableDB_.getName(a.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE)+"@",Blockly.AESL.ORDER_ATOMIC]};
Blockly.AESL.thymio_variable_set=function(a){var b=Blockly.AESL.variableDB_.getName(a.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE),c=this.getInputTargetBlock("VALUE");a=Blockly.AESL.checkValueBlockType(c)?Blockly.AESL.valueToCode(a,"VALUE",Blockly.AESL.ORDER_ASSIGNMENT)||"0":"0";return"@variable:"+b+"@ = "+a+"\n"};
Blockly.AESL.thymio_declare_array=function(a){var b=Blockly.AESL.variableDB_.getName(a.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE);a=parseInt(a.getFieldValue("SIZE"));1>a&&(a=1);Blockly.AESL.arrays[b]=a;return null};
Blockly.AESL.thymio_set_array=function(a){var b=Blockly.AESL.variableDB_.getName(a.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE),c=Blockly.AESL.valueToCode(a,"INDEX",Blockly.AESL.ORDER_INDEX)||"0";a=Blockly.AESL.valueToCode(a,"VALUE",Blockly.AESL.ORDER_ASSIGNMENT)||"0";b in Blockly.AESL.arrays||(Blockly.AESL.arrays[b]=1);return b+"["+c+"] = "+a+"\n"};
Blockly.AESL.thymio_get_array=function(a){var b=Blockly.AESL.variableDB_.getName(a.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE);a=Blockly.AESL.valueToCode(a,"INDEX",Blockly.AESL.ORDER_NONE)||"0";b in Blockly.AESL.arrays||(Blockly.AESL.arrays[b]=1);return[b+"["+a+"]",Blockly.AESL.ORDER_INDEX]};
Blockly.AESL.thymio_compare=function(a){this.getInputTargetBlock("A");this.getInputTargetBlock("B");var b={EQ:"==",NEQ:"!=",LT:"<",LTE:"<=",GT:">",GTE:">="}[a.getFieldValue("OP")],c=Blockly.AESL.ORDER_CONDITION,d=Blockly.AESL.valueToCode(a,"A",c)||"0";a=Blockly.AESL.valueToCode(a,"B",c)||"0";return[d+" "+b+" "+a,c]};
Blockly.AESL.thymio_arithmetic=function(a){var b=a.getFieldValue("OP"),c=Blockly.AESL.ORDER_MULT;if("+"==b||"-"==b)c=Blockly.AESL.ORDER_ADD;var d=Blockly.AESL.valueToCode(a,"A",c)||"0";a=Blockly.AESL.valueToCode(a,"B",c)||"0";return[d+" "+b+" "+a,c]};
Blockly.AESL.thymio_binary=function(a){var b=a.getFieldValue("OP"),c;"<<"==b||">>"==b?c=Blockly.AESL.ORDER_SHIFT:"&"==b?c=Blockly.AESL.ORDER_BINARY_AND:"|"==b?c=Blockly.AESL.ORDER_BINARY_OR:"^"==b&&(c=Blockly.AESL.ORDER_BINARY_XOR);var d=Blockly.AESL.valueToCode(a,"A",c)||"0";a=Blockly.AESL.valueToCode(a,"B",c)||"0";return[d+" "+b+" "+a,c]};
Blockly.AESL.thymio_unary=function(a){var b=a.getFieldValue("OP"),c;"-"==b?c=Blockly.AESL.ORDER_MINUS:"abs"==b?c=Blockly.AESL.ORDER_ABS:"~"==b&&(c=Blockly.AESL.ORDER_BINARY_NOT);a=Blockly.AESL.valueToCode(a,"VALUE",c)||"0";return[b+("abs"==b?" ":"")+a,c]};Blockly.AESL.thymio_communication=function(a){return"ENABLE"==a.getFieldValue("MODE")?"call prox.comm.enable(1)\n":"call prox.comm.enable(0)\n"};Blockly.AESL.logic={};Blockly.AESL.controls_if=function(a){for(var b=0,c=Blockly.AESL.valueToCode(a,"IF"+b,Blockly.AESL.ORDER_NONE)||"0 == 1",d=Blockly.AESL.statementToCode(a,"DO"+b),e="if "+c+" then\n"+d,b=1;b<=a.elseifCount_;b++)c=Blockly.AESL.valueToCode(a,"IF"+b,Blockly.AESL.ORDER_NONE)||"0 == 1",d=Blockly.AESL.statementToCode(a,"DO"+b),e+="elseif "+c+" then\n"+d;a.elseCount_&&(d=Blockly.AESL.statementToCode(a,"ELSE"),e+="else\n"+d);return e+"end\n"};
Blockly.AESL.logic_compare=function(a){var b=this.getInputTargetBlock("A"),c=this.getInputTargetBlock("B");if(!Blockly.AESL.checkValueBlockType(b)||!Blockly.AESL.checkValueBlockType(c))return["0 == 1",Blockly.AESL.ORDER_CONDITION];var b={EQ:"==",NEQ:"!=",LT:"<",LTE:"<=",GT:">",GTE:">="}[a.getFieldValue("OP")],c=Blockly.AESL.ORDER_CONDITION,d=Blockly.AESL.valueToCode(a,"A",c)||"0";a=Blockly.AESL.valueToCode(a,"B",c)||"0";return[d+" "+b+" "+a,c]};
Blockly.AESL.logic_operation=function(a){var b="AND"==a.getFieldValue("OP")?"and":"or",c="and"==b?Blockly.AESL.ORDER_LOGICAL_AND:Blockly.AESL.ORDER_LOGICAL_OR,d=Blockly.AESL.valueToCode(a,"A",c);a=Blockly.AESL.valueToCode(a,"B",c);if(d||a){if(!d)return[a,c];if(!a)return[d,c]}else return["0 == 1",Blockly.AESL.ORDER_CONDITION];return[d+" "+b+" "+a,c]};Blockly.AESL.logic_negate=function(a){var b=Blockly.AESL.ORDER_LOGICAL_NOT;return["not "+(Blockly.AESL.valueToCode(a,"BOOL",b)||"0 == 0"),b]};
Blockly.AESL.logic_boolean=function(a){return["TRUE"==a.getFieldValue("BOOL")?"0 == 0":"0 == 1",Blockly.AESL.ORDER_CONDITION]};Blockly.AESL.math={};Blockly.AESL.math_number=function(a){return[parseInt(a.getFieldValue("NUM")),Blockly.AESL.ORDER_ATOMIC]};
Blockly.AESL.math_arithmetic=function(a){var b={ADD:[" + ",Blockly.AESL.ORDER_ADD],MINUS:[" - ",Blockly.AESL.ORDER_ADD],MULTIPLY:[" * ",Blockly.AESL.ORDER_MULT],DIVIDE:[" / ",Blockly.AESL.ORDER_MULT],POWER:[null,Blockly.AESL.ORDER_MULT]}[a.getFieldValue("OP")],c=b[0],b=b[1],d=Blockly.AESL.valueToCode(a,"A",b)||"0";a=Blockly.AESL.valueToCode(a,"B",b)||"0";return c?[d+c+a,b]:[d,Blockly.AESL.ORDER_MULT]};Blockly.AESL.loops={};Blockly.AESL.controls_repeat=function(a){var b=String(Number(a.getFieldValue("TIMES")));a=Blockly.AESL.statementToCode(a,"DO");return"for "+Blockly.AESL.variableDB_.getDistinctName("i",Blockly.Variables.NAME_TYPE)+" in 1:"+b+" do\n"+a+"end\n"};
Blockly.AESL.controls_whileUntil=function(a){var b="UNTIL"==a.getFieldValue("MODE"),c=Blockly.AESL.valueToCode(a,"BOOL",b?Blockly.AESL.ORDER_LOGICAL_NOT:Blockly.AESL.ORDER_NONE)||"0 == 1";a=Blockly.AESL.statementToCode(a,"DO");b&&(c="not "+c);return"while "+c+" do\n"+a+"end\n"};