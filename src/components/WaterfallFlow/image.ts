interface Result {
  src: string;
  index: number;
}
export const imageOnComplete: (images: Element[]) => Promise<Result[]> = (
  images: Element[]
) => {
  let imageResult: Promise<Result>[] = images.map((item, index) => {
    let i = item as HTMLImageElement;
    return new Promise((resolve, reject) => {
      let img = new Image();
      img.src = i.src;
      img.onload = () => {
        resolve({
          src: i.src,
          index,
        });
      };
      img.onerror = () => {
        reject({
          src: i.src,
          index,
        });
      };
    });
  });
  return Promise.all(imageResult);
};
export const imageAllElement: (element:Element[]) => Element[] = (element) => {
  let imagesList = element.map(item=>{
   return item.getElementsByTagName("img")[0]
  })
  return Array.from(imagesList)
};
export const imageAllParentElement: () => Element[] = () => {
  let elements = Array.from(document.querySelectorAll('.fish__flow_item'));
  return elements;
};
export const getMinHeight = (heightArr:number[])=>{
  
}
