
using Coldairarrow.Entity.Video;
using Coldairarrow.Util;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Coldairarrow.IBusiness.Video
{
    public interface IBaseappsecretBusiness
    {
        /// <summary>
        /// 列表(分页查询)
        /// </summary>
        /// <param name="input">分页参数</param>
        /// <param name="CompanyStyle">字段</param>
        /// <returns></returns>
        Task<List<Baseappsecret>> GetDataList(PageInput<Baseappsecret> input, string CompanyStyle);
        /// <summary>
        /// 获取详情
        /// </summary>
        /// <param name="Id">主键</param>
        /// <returns></returns>
        Task<Baseappsecret> GetTheData(string Id);

        /// <summary>
        /// 新增
        /// </summary>
        /// <param name="entity">新增数据</param>
        /// <returns></returns>
        Task InsertData(Baseappsecret entity);

        /// <summary>
        /// 修改实体
        /// </summary>
        /// <param name="entity">修改数据</param>
        /// <returns></returns>
        Task UpdateData(Baseappsecret entity);

        /// <summary>
        /// 删除
        /// </summary>
        /// <param name="ids">主键</param>
        /// <returns></returns>
        Task DeleteData(List<string> ids);
    }
}            
    