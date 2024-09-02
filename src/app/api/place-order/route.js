export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;
import prisma from "@/db";
import { getSessionId } from "@/lib/session";
import { getSession } from "@/lib/session";
export async function POST(request) {
  const sessionEmail = await getSession();
  const requestbody = await request.json();
  const sessionid = await getSessionId();

  // Fetching Data from cart table
  let cartdata = await prisma.cartitems.findMany({
    where: {
      sessionid: sessionid,
    },
    include: {
      products: true,
    },
  });
  // End

  //Storing Cart in Variable
  const orderItems = cartdata.map(item => ({
    quantity: item.quantity,
    sku: item.sku,
    name: item.products.name,
    individual_price: item.products.price,
    image: item.products.image,
    total_price: item.quantity * item.products.price,
  }));
  // End

  // Calculate Tax and total price
  const totalPrice = orderItems.reduce((acc, currentItem) => acc + currentItem.total_price, 0);
  const central = 9;
  const state = 9;
  const CGST = (totalPrice * central) / 100;
  const SGST = (totalPrice * state) / 100;
  const subTotal = (totalPrice - (CGST + SGST));
  // End

  // Inserting the order in Database
  const Orders = await prisma.orders.create({
    data: {
      shipping_first_name: requestbody.shipping_first_name,
      shipping_last_name: requestbody.shipping_last_name,
      shipping_address_one: requestbody.shipping_address_one,
      shipping_address_two: requestbody.shipping_address_two,
      shipping_country: requestbody.shipping_country,
      shipping_state: requestbody.shipping_state,
      shipping_city: requestbody.shipping_city,
      shipping_pincode: parseInt(requestbody.shipping_pincode),
      shipping_landmark: requestbody.shipping_landmark,
      shipping_phone_number: parseInt(requestbody.shipping_phone_number),
      billing_first_name: requestbody.billing_first_name || null,
      billing_last_name: requestbody.billing_last_name || null,
      billing_address_one: requestbody.billing_address_one || null,
      billing_address_two: requestbody.billing_address_two || null,
      billing_country: requestbody.billing_country || null,
      billing_state: requestbody.billing_state || null,
      billing_city: requestbody.billing_city || null,
      billing_pincode: parseInt(requestbody.billing_pincode) || null,
      billing_landmark: requestbody.billing_landmark || null,
      billing_phone_number: parseInt(requestbody.billing_phone_number) || null,
      payment_mode: requestbody.payment_mode,
      tax_cgst: CGST,
      tax_sgst: SGST,
      subtotal: subTotal,
      total: totalPrice,
      session_email: sessionEmail.user_details?.email,
      orderitems: {
        create: orderItems,
      },
    },
  });
  // End

  return Response.json({ Orders });
}

