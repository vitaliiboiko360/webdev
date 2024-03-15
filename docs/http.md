#### DNS  
map domain name to IP address   

#### https  
https encrypt traffic between client and server   

establish crypto algo cli and srv will use  

TLS hanshake  
- specify version of TLS (1.0, 1.2, 1.3)  
- decide cipher suites to use  
- auth server via server's public key  
- generate session keys to use symmetric encryption  

RSA or Diffie-Hellman key exchange alros  

1. client sends TLS version and cipher suite supported, 
and string of random bytes - client random  

2. server responds TLS certificate, cipher suite  
and server random  

3. in RSA: client sends encrypted by srv's public key a random string (premaster secret)   
in DH: client sends DH parameters

4. in RSA: server decrypt premaster secret 
in DH: client and server using DH params generate premaster secret  

5. client send 'finished' 
server send 'finished'  

**TLS 1.3** supports DH (not support RSA)  
1. client sends proto version, client random, parameters be used  
to generate premaster secret  

2. server geenate master secret  

3. client sends 'finished' message  
server 'finished'

#### http -> https redirects  
server send status 301 (Moved Permanently)