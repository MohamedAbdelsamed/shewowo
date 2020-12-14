export const baseUrl = 'https://wow.ieeeshasb.org/';

const auth = 'api/auth/'; 
const mobile = 'api/mobile/'; 
const dashboard = 'api/dashboard/'; 
const enduser =  'api/enduser/';
const user = 'api/user/'

// const lang = localStorage.getItem('lang') || 0;
const lang =  0;

// post
export const addMainCategoryUrl = baseUrl + dashboard + 'add_main_category'
export const addMainSliderUrl = baseUrl + dashboard + 'add_home_slider'
// for special category
export const addBestBrandUrl = baseUrl + dashboard + 'add_category_brande'
export const addSubCategoryUrl = baseUrl + dashboard + 'add_sub_category'
export const addCategorySliderUrl = baseUrl + dashboard + 'add_category_slider'
export const addCategorySpecialImageUrl = baseUrl + dashboard + 'add_special_img'
export const addSubCategoryOfSubCategory = baseUrl + dashboard + 'add_sub_ofsub_category'



// get
export const getMainCategoryNamesUrl = baseUrl + dashboard + 'main_categories_names/' +lang
export const getAllHomeSlidersUrl = baseUrl + dashboard + 'all_home_slider/' +lang
export const getSpecificMainCategoryNamesUrl = baseUrl + dashboard + 'specific_category/'


// for special category
export const getSpecialCategoryUrl = baseUrl + dashboard + 'specific_category/'
export const getBestBrandsUrl = baseUrl + dashboard + 'all_category_brands/'
export const getSubCategoriesUrl = baseUrl + dashboard + 'all_sub_category_names/'
export const getCategorySlidersUrl = baseUrl + dashboard + 'all_category_sliders/'
export const getCategorySpecialImagesUrl = baseUrl + dashboard + 'category_special_imgs/'
export const getSubCategoriesOfSubCategoryUrl = baseUrl + dashboard + 'all_sub_ofsub_category_names/'


// delete
export const deleteMainCategoryUrl = baseUrl + dashboard + 'delete_category/'
export const deleteMainSliderUrl = baseUrl + dashboard + 'delete_home_slider/'
//special Category


export const deleteBestBrandUrl = baseUrl + dashboard + 'delete_category/'
export const deleteSubCategoryUrl = baseUrl + dashboard + 'delete_home_slider/'
export const deleteSubCategoryOfSubCategoryUrl = baseUrl + dashboard + 'delete_category/'
export const deleteCatSliderUrl = baseUrl + dashboard + 'delete_home_slider/'
export const deleteCatSpecialImageUrl = baseUrl + dashboard + 'delete_home_slider/'

// update 
export const updateMainCategoryUrl = baseUrl + dashboard + 'update_category/'


// aut 
export const vendorSignUpUrl = baseUrl + auth + 'register_vendor';
export const signUpUrl = baseUrl + auth + 'register'
export const login = baseUrl + auth + 'login'
// export const vendorSignUpUrl = baseUrl + auth + 'register_vendor'
// export const signUpUrl = baseUrl + auth + 'register'
export const loginUpUrl = baseUrl + auth + 'login'


// get 
export const getNavDataUrl = baseUrl + enduser + 'navbarData/' +lang
export const getHomeDataUrl = baseUrl + enduser + 'home/data/' +lang

// Profile   {{url}}/api/user/updateName
export const getProfileUrl = baseUrl + user + 'profile' 
export const updateName = baseUrl + user + 'updateName'