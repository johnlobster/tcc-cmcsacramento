
# Outline bug
``` tsx
<Menu 
            id="simple-menu"
            color="secondary"
            variant="menu"
            keepMounted
            open={anchorEl? true : false}
            onClose={menuClose}
            anchorReference="anchorPosition"
            anchorPosition={
                { top: menuOrigin.y, left: menuOrigin.x}
            }
            
          >
            
            <MenuList>
              <MenuItem onClick={menuClose}>
                <Typography color="primary">
                  Close Menu
                </Typography>
              </MenuItem>
              {data.map((item, index) => {
                return (
                  <MenuItem onClick={menuClose} key={item.name}>
                    <Link href={item.name} >
                      {item.menu}
                    </Link>
                  </MenuItem>
                )
              })}
              
            </MenuList>
          </Menu>


```

fix is to add an override to `<MenuList>`
``` tsx

const listStyles = makeStyles(createStyles({
  list2: {
    outline: 'none',
  }
}))


<MenuList className={listClasses.list2}>
```

