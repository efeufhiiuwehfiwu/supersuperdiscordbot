var Discord = require("discord.js");
var prefix = "t!";
var client = new Discord.Client();

client.on("ready", () => {
  console.log("ready to rumble!");
});



client.on("message", msg => { if (!msg.content.toLowerCase().startsWith(prefix)) return;
  msg.delete();{
  if (!msg.member.hasPermission("BAN_MEMBERS")) 
    { msg.channel.send("You can't do shit."); return;}
  else {
 
  if (msg.content.toLowerCase().startsWith(prefix + "kick ")) {
    var mem = msg.mentions.members.first();
    mem.kick().then(() => {
      msg.channel.send(mem.displayName + " has successfully been kicked by " + msg.author.username + "!");
    }).catch(e => {
      msg.channel.send("An error occured!");
    });
  }
  if (msg.content.toLowerCase().startsWith(prefix + "ban ")) {
    var mem = msg.mentions.members.first();
    var mc = msg.content.split(" ")[2];
    mem.ban(mc).then(() => {
      msg.channel.send(mem.displayName + " has successfully been banned by " + msg.author.username + " for " + mc + " days!");
    }).catch(e => {
      msg.channel.send("An error occured!");
    });
  }
  if (msg.content.toLowerCase().startsWith(prefix + "mute")) {
   
      let mem = msg.mentions.users.first();
      let role = msg.guild.roles.find(r => r.name === 'muted');
      if(!role) msg.guild.createRole({name: 'muted'});
      if(!mem){
        msg.channel.send(`There's no person to mute tho`);}
      if(msg.guild.member(msg.mentions.users.first()).hasPermission("BAN_MEMBERS")) {
      msg.channel.send("I can't mute them because they are staff"); return;
      }
     
      msg.guild.channels.forEach(f => {
          f.overwritePermissions(role, {
              SEND_MESSAGES: false
          });
          msg.guild.member(msg.mentions.users.first()).addRole(role);
         
      });
       msg.channel.send(msg.guild.member(msg.mentions.users.first()).displayName + " has successfully been muted!");
      };
   
   
  if (msg.content.toLowerCase().startsWith(prefix + "unmute")) {
    let mem = msg.mentions.users.first();
      let role = msg.guild.roles.find(r => r.name === 'muted');
      if(!role) msg.guild.createRole({name: 'muted'});
      if(!mem){
          msg.channel.send(`There's no person to unmute tho`);
      }
   
          msg.guild.member(msg.mentions.users.first()).removeRole(role);

       msg.channel.send(msg.guild.member(msg.mentions.users.first()).displayName + " has successfully been unmuted!");
      ;

    
  }
  if (msg.content.toLowerCase().startsWith(prefix + "purge")) {
    var mc = msg.content.split(" ")[1];
    msg.channel.bulkDelete(mc);
  }
  if (msg.content.toLowerCase().startsWith(prefix + "eval")) {
    var sc = msg.content.substring(msg.content.indexOf(" "));
    eval(sc);
  }
  if (msg.content.toLowerCase().startsWith(prefix + "calc")) {
    var ca = msg.content.substring(msg.content.indexOf(" "));
    msg.reply(ca + " is " + eval(ca).toFixed(2));
  }
}}});

client.login("NzA4NDEzMjkwNTE4NDEzMzUy.XsrRHw.qrnjI-UPIfE1w8h68dy8EIPL1ys");
