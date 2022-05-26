import { Card, CardActions, CardContent, CardMedia, Link, Typography, Grid } from "@mui/material"

const Noticia = (noticia) => {
    const {noticia: noticiaTotal} = noticia
    const{urlToImage, url, title, description, source} = noticiaTotal
  return (
    <Grid item md={2} lg={4} >
        <Card>
            {urlToImage &&(
                <CardMedia
                component="img"
                image={urlToImage}
                alt="Imagen"
                height={"250"}
                />
            )}

            <CardContent>
                <Typography variant="body1" color="error">
                    {source.name}
                </Typography>
                <Typography variant="h5" component={"div"}>
                    {title}
                </Typography>
                <Typography variant="body2">
                    {description}
                </Typography>
               
            </CardContent>
            
            <CardActions>
                <Link
                    href={url}
                    target="_blank"
                    variant="button"
                    width={"100%"}
                    textAlign={"center"}
                    sx={{
                        textDecoration:"none"
                    }}
                >
                    Leer Noticia
                </Link>
                    
            </CardActions>

        </Card>
    </Grid>
  )
}

export default Noticia