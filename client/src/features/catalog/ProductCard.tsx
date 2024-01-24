import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import { Product } from "../../app/models/product";
import { Link } from "react-router-dom";

interface Props {
    product: Product
}

export default function ProductCard({ product }: Props) {
    return (
        <Card>
            <CardHeader
                avatar={
                    <Avatar>
                        {product.name.charAt(0).toUpperCase()}
                    </Avatar>
                }
                title={product.name}
                titleTypographyProps={{
                    sx: {fontWeight:'bold', color:'secondary.main'}
                }}
            />

         
            <CardMedia
                sx={{ height: 140, backgroundSize: 'contain', bgcolor:'primary.light'}}
                image={product.pictureUrl}
                title={product.name}
                
            />
            <CardContent>
                <Typography color='secondary' gutterBottom variant="h5">
                    {(product.price/100).toFixed(2)}$
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.brand} / {product.type}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" component={Link} to={`/catalog/${product.id}`}>View</Button>
                <Button size="small">Add To Cart</Button>
            </CardActions>

            
        </Card>
    )


}