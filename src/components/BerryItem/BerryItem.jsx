// import { Box, Typography, CardMedia, Button } from "@mui/material";
// import Grid from "@mui/material/Grid2";
// import { styled } from "@mui/material/styles";
// import { useSelector } from "react-redux";

// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

// export default function BerryItem() {
//   const berry = useSelector((state) => state.berries.berry);
//   const berryImageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${berry.item.name}.png`;
//   const Item = styled(Box)(({ theme }) => ({
//     backgroundColor: "#EFEFEF",
//     width: "48px",
//     height: "48px",
//     borderRadius: "4px",
//     ...theme.typography.body2,
//     padding: 0,
//     textAlign: "center",
//     color: theme.palette.text.secondary,
//     ...theme.applyStyles("dark", {
//       backgroundColor: "#1A2027",
//     }),
//   }));
//   const IMAGES = {
//     image3: new URL("./img/money-logo.png", import.meta.url).href,
//   };

//   if (!berry) return null;

//   return (
//     <Box className={"box__item"}>
//       <Grid container spacing={1.5}>
//         <Grid>
//           <Item className="item">
//             <CardMedia
//               sx={{
//                 mr: "6px",
//                 width: "48px",
//                 height: "48px",
//               }}
//               component="img"
//               image={berryImageUrl}
//               alt={berry.name}
//             />
//           </Item>
//         </Grid>
//       </Grid>

//       <Button
//         className="inventory__button"
//         size="small"
//         sx={{ mt: "12px", position: "absolute", width: "288px" }}
//       >
//         <CardMedia
//           className={"inventory__button-img"}
//           sx={{ width: "32px" }}
//           component="img"
//           image={IMAGES.image3}
//           alt="Logo"
//         />{" "}
//         <Typography variant="p" sx={{ fontSize: "24px" }}>
//           1000
//         </Typography>
//       </Button>
//     </Box>
//   );
// }
