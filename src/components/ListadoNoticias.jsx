import { Grid, Typography } from "@mui/material"
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import useNoticias from "../hooks/useNoticias"
import Noticia from "./Noticia"

const ListadoNoticias = () => {
    const {noticias, totalNoticias, handleChangePagina, pagina} = useNoticias()
    console.log(totalNoticias)
    const totalPaginas = Math.ceil(totalNoticias / 20)
    console.log(totalPaginas)
  return (
    <>
        <Typography
            textAlign={"center"}
            marginY={5}
            variant={"h3"}
            component={"h2"}
        >
            ULTIMAS NOTICIAS
        </Typography>
        <Grid
            container
            spacing={2}
        >
            {noticias.map(noticia=>(
                <Noticia
                    noticia={noticia}
                    key={noticia.url}
                />
            )) }
        </Grid>
        <Stack 
            sx={{
                marginY: 5
            }}
            spacing={2}
            direction={"row"}
            justifyContent={"center"}
            alignItems={"center"}
        
        >
            <Pagination 
                page={pagina}
                count={totalPaginas} 
                color="primary" 
                onChange={handleChangePagina}
            />
        </Stack>
    </>
  )
}

export default ListadoNoticias