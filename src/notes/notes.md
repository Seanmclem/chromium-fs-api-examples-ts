A FileSystemHandle is an Entry. It basically is a reference to any point in your file-system. Be it a directory file itself.

Entry - same as above. a reference to a point in the file system... but
    - can be of type file directory
    - has a name
    - files, have binary data
    - directories have children

showDirectoryPicker - doesn't seem to take any options params anymore. Paramless.
    ex
    ```javascript
        handle = await window.showDirectoryPicker()
    ```
    So handle probably contains; name, children, that's it..


*
this shouldn't be in strapi, because of the need for examples
*