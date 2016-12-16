### WHERE DO I HAVE TO PUT MY SOURCES?

Well we can solve it with a Q.A. :

*Q: Do you need to create a page for the main window developed 
for this application and only this?*

A: you can create a folder that contains an index.html + js files + css files 
putting it in:

/site/com/  <- this is a new folder that can contain common pages without 
               a specific fixed translation

/site/en/   <- english only pages


/site/it/   <- italian only pages


You can even create subfolder if a page is related to another ( for example 
realm subpages )


*Q: Do you need to create a component for your page?*

A: /src/component/  <- it contains all webcomponents with theirs css and js



*Q: Do you need to include a module that is redistributable ( not only for drassil app ) ?*

A: /modules/ <- this folder is for you




*Q: do you need to create shared sources that are strictly related to the application or
related to a specific platform ?*

A: /src/ <- it contains all shared sources and even folders for various platforms