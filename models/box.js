import mongoose from 'mongoose';

const boxschema = mongoose.Schema();


const boxModel = mongoose.model("BoxSchema", boxschema);

export default boxModel